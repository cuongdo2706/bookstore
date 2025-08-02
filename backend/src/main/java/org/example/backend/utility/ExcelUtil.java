package org.example.backend.utility;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.example.backend.dto.response.OrderDetailResponse;
import org.example.backend.dto.response.OrderResponse;
import org.example.backend.dto.response.ProductResponse;
import org.example.backend.entity.*;
import org.example.backend.exception.DataNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.zip.DataFormatException;

@Component
public class ExcelUtil {
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");

    public static String convertOrderStatus(Short status) throws DataNotFoundException {
        return switch (status) {
            case 0 -> "Chờ xác nhận";
            case 1 -> "Đang xử lý";
            case 2 -> "Đang vận chuyển";
            case 3 -> "Đã vận chuyển";
            case 4 -> "Đã huỷ";
            case 5 -> "Đã hoàn thành";
            default -> throw new DataNotFoundException("Trạng thái không tồn tại");
        };
    }

    public ByteArrayInputStream exportBookExcel(List<Product> products) {
        try (Workbook workbook = new XSSFWorkbook() ; ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Sheet sheet = workbook.createSheet("Danh sách sản phẩm");
            Row headerRow = sheet.createRow(0);
            headerRow.createCell(0).setCellValue("STT");
            headerRow.createCell(1).setCellValue("Mã sách");
            headerRow.createCell(2).setCellValue("Tên sách");
            headerRow.createCell(3).setCellValue("Hình ảnh");
            headerRow.createCell(4).setCellValue("Số lượng");
            headerRow.createCell(5).setCellValue("Giá bán");
            headerRow.createCell(6).setCellValue("Nhà xuất bản");
            headerRow.createCell(7).setCellValue("Dịch giả");
            headerRow.createCell(8).setCellValue("Số trang");
            headerRow.createCell(9).setCellValue("Năm xuất bản");
            headerRow.createCell(10).setCellValue("Tác giả");
            headerRow.createCell(11).setCellValue("Danh mục");

            int rowNum = 1;
            for (Product p : products) {
                Row row = sheet.createRow(rowNum++);
                row.createCell(0).setCellValue(rowNum - 1);
                row.createCell(1).setCellValue(p.getCode());
                row.createCell(2).setCellValue(p.getName());
                row.createCell(3).setCellValue(p.getImgUrl());
                row.createCell(4).setCellValue(p.getQuantity());
                row.createCell(5).setCellValue(String.valueOf(p.getPrice()));
                row.createCell(6).setCellValue(p.getPublisher());
                row.createCell(7).setCellValue(p.getTranslator());
                row.createCell(8).setCellValue(p.getNumOfPages() == null ? null : p.getNumOfPages().toString());
                row.createCell(9).setCellValue(p.getPublishedYear() == null ? null : p.getPublishedYear().toString());
                row.createCell(10).setCellValue(p.getAuthors().stream().map(Author::getName).collect(Collectors.joining(" - ")));
                row.createCell(11).setCellValue(p.getCategories().stream().map(Category::getName).collect(Collectors.joining(" - ")));
            }
            workbook.write(out);
            return new ByteArrayInputStream(out.toByteArray());
        } catch (IOException ex) {
            throw new RuntimeException("Fail to export data to Excel file: " + ex.getMessage());
        }
    }

//    public List<BookCreatedRequest> importBookExcel(MultipartFile file) throws IOException {
//        List<BookCreatedRequest> books = new ArrayList<>();
//        try (Workbook workbook = new XSSFWorkbook(file.getInputStream())) {
//            Sheet sheet = workbook.getSheetAt(0);
//            Iterator<Row> rows = sheet.iterator();
//            if (rows.hasNext()) {
//                rows.next();
//            }
//            while (rows.hasNext()) {
//                Row row = rows.next();
//                BookCreatedRequest book = new BookCreatedRequest();
//                book.setName(row.getCell(0).getStringCellValue());
//                book.setQuantity((int) row.getCell(1).getNumericCellValue());
//                book.setPrice(BigDecimal.valueOf(row.getCell(2).getNumericCellValue()));
//                if (row.getCell(3)!=null) {
//                    book.setPublisher(row.getCell(3).getStringCellValue());
//                }
//                if (row.getCell(4)!=null) {
//                    book.setTranslator(row.getCell(4).getStringCellValue());
//                }
//                if (row.getCell(5)!=null) {
//                    book.setNumOfPages((int)row.getCell(5).getNumericCellValue());
//                }
//                if (row.getCell(6)!=null) {
//                    book.setPublishedYear((int)row.getCell(6).getNumericCellValue());
//                }
//
//            }
//        } catch (Exception e) {
//
//        }
//        return books;
//    }

    public ByteArrayInputStream exportOrderExcel(List<Order> orders) {
        try (Workbook workbook = new XSSFWorkbook() ; ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Sheet sheet = workbook.createSheet("Danh sách hoá đơn");
            Row headerRow = sheet.createRow(0);
            String[] header = {"STT", "Mã hoá đơn", "Thời gian", "Khách hàng", "Tổng tiền", "Giảm giá", "Khách đã trả"};
            for (int i = 0 ; i < header.length ; i++) {
                headerRow.createCell(i).setCellValue(header[i]);
            }
            int rowNum = 1;
            for (Order o : orders) {
                Row row = sheet.createRow(rowNum++);
                row.createCell(0).setCellValue(rowNum - 1);
                row.createCell(1).setCellValue(o.getCode());
                row.createCell(2).setCellValue(o.getOrderedAt().format(formatter));
                row.createCell(3).setCellValue(Objects.equals(o.getCustomer(), null) ? "Khách lẻ" : o.getCustomer().getName());
                row.createCell(4).setCellValue(o.getSubTotal().toString());
                row.createCell(5).setCellValue(o.getDiscount().toString());
                row.createCell(6).setCellValue(o.getGrandTotal().toString());
            }
            workbook.write(out);
            return new ByteArrayInputStream(out.toByteArray());
        } catch (IOException ex) {
            throw new RuntimeException("Fail to export data to Excel file: " + ex.getMessage());
        }
    }

    public ByteArrayInputStream exportSingleOrderExcel(Order o) {
        try (Workbook workbook = new XSSFWorkbook() ; ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Sheet sheet = workbook.createSheet("Hoá đơn " + o.getCode());
            Row headerRow = sheet.createRow(0);
            String[] header = {"STT", "Mã sách", "Tên sách", "Số lượng", "Đơn giá", "Giảm giá", "Thành tiền"};
            for (int i = 0 ; i < header.length ; i++) {
                headerRow.createCell(i).setCellValue(header[i]);
            }
            int rowNum = 1;
            for (OrderDetail od : o.getOrderDetails()) {
                Row row = sheet.createRow(rowNum++);
                row.createCell(0).setCellValue(rowNum - 1);
                row.createCell(1).setCellValue(od.getProductCode());
                row.createCell(2).setCellValue(od.getProductName());
                row.createCell(3).setCellValue(od.getQuantity());
                row.createCell(4).setCellValue(od.getPrice().toString());
                row.createCell(5).setCellValue(od.getDiscount().toString());
                row.createCell(6).setCellValue(od.getTotalPrice().toString());
            }
            rowNum++;
            Row subTotalRow = sheet.createRow(rowNum++);
            subTotalRow.createCell(4).setCellValue("Tổng tiền hàng");
            subTotalRow.createCell(6).setCellValue(o.getSubTotal().toString());
            Row discountRow = sheet.createRow(rowNum++);
            discountRow.createCell(4).setCellValue("Giảm giá");
            discountRow.createCell(6).setCellValue(o.getDiscount().toString());
            Row grandTotalRow = sheet.createRow(rowNum++);
            grandTotalRow.createCell(4).setCellValue("Tổng cộng");
            grandTotalRow.createCell(6).setCellValue(o.getGrandTotal().toString());
            workbook.write(out);
            return new ByteArrayInputStream(out.toByteArray());
        } catch (IOException ex) {
            throw new RuntimeException("Fail to export data to Excel file: " + ex.getMessage());
        }
    }

    public ByteArrayInputStream exportAllOrderDetailsExcel(List<OrderDetail> ods) {
        try (Workbook workbook = new XSSFWorkbook() ; ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Sheet sheet = workbook.createSheet("Danh sách chi tiết hoá đơn");
            Row headerRow = sheet.createRow(0);
            String[] header = {"STT", "Mã hoá đơn", "Địa chỉ", "Phí vận chuyển", "Người nhận", "Ngày đặt", "Mã khách hàng", "Tên khách hàng", "Email", "Điện thoại", "Người bán", "Kênh bán", "Loại đơn", "Tổng tiền", "Giảm giá", "Khách cần trả", "Khách đã trả", "Trạng thái", "Mã sách", "Tên sách", "Số lượng", "Đơn giá", "Giảm giá", "Thành tiền"};
            for (int i = 0 ; i < header.length ; i++) {
                headerRow.createCell(i).setCellValue(header[i]);
            }
            int rowNum = 1;
            for (OrderDetail od : ods) {
                Row row = sheet.createRow(rowNum++);
                row.createCell(0).setCellValue(rowNum - 1);
                row.createCell(1).setCellValue(od.getOrder().getCode());
                row.createCell(2).setCellValue(od.getOrder().getAddress());
                row.createCell(3).setCellValue(od.getOrder().getDeliveryFee() == null ? "" : od.getOrder().getDeliveryFee().toString());
                row.createCell(4).setCellValue(od.getOrder().getCustomerName());
                row.createCell(5).setCellValue(od.getOrder().getOrderedAt().format(formatter));
                row.createCell(6).setCellValue(Objects.equals(od.getOrder().getCustomer(), null) ? "" : od.getOrder().getCustomer().getCode());
                row.createCell(7).setCellValue(Objects.equals(od.getOrder().getCustomer(), null) ? "Khách lẻ" : od.getOrder().getCustomer().getName());
                row.createCell(8).setCellValue(od.getOrder().getEmail());
                row.createCell(9).setCellValue(od.getOrder().getPhoneNum());
                row.createCell(10).setCellValue(od.getOrder().getStaff().getName());
                row.createCell(11).setCellValue(od.getOrder().getSaleChannel().equals((short) 0) ? "Tại quầy" : "Website");
                row.createCell(12).setCellValue(od.getOrder().getOrderType().equals((short) 0) ? "Mua trực tiếp" : "Vận chuyển");
                row.createCell(13).setCellValue(od.getOrder().getSubTotal().toString());
                row.createCell(14).setCellValue(od.getOrder().getDiscount().toString());
                row.createCell(15).setCellValue(od.getOrder().getGrandTotal().toString());
                row.createCell(16).setCellValue(od.getOrder().getAmountPaid().toString());
                row.createCell(17).setCellValue(convertOrderStatus(od.getOrder().getOrderStatus()));
                row.createCell(18).setCellValue(od.getProductCode());
                row.createCell(19).setCellValue(od.getProductName());
                row.createCell(20).setCellValue(od.getQuantity());
                row.createCell(21).setCellValue(od.getPrice().toString());
                row.createCell(22).setCellValue(od.getDiscount().toString());
                row.createCell(23).setCellValue(od.getTotalPrice().toString());
            }
            workbook.write(out);
            return new ByteArrayInputStream(out.toByteArray());
        } catch (DataNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException ex) {
            throw new RuntimeException("Fail to export data to Excel file: " + ex.getMessage());
        }
    }
}
