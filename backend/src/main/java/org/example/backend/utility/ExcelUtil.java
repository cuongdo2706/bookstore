package org.example.backend.utility;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.example.backend.dto.response.ProductResponse;
import org.springframework.stereotype.Component;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Component
public class ExcelUtil {
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");

    public ByteArrayInputStream exportBookExcel(List<ProductResponse> list) {
        try (
                Workbook workbook = new XSSFWorkbook() ;
                ByteArrayOutputStream out = new ByteArrayOutputStream()
        ) {
            Sheet sheet = workbook.createSheet("Danh sách sản phẩm");
            Row headerRow = sheet.createRow(0);
            headerRow.createCell(0).setCellValue("STT");
            headerRow.createCell(1).setCellValue("Mã sách");
            headerRow.createCell(2).setCellValue("Tên sách");
            headerRow.createCell(3).setCellValue("Hình ảnh");
            headerRow.createCell(4).setCellValue("Số lượng");
            headerRow.createCell(5).setCellValue("Giá gốc");
            headerRow.createCell(6).setCellValue("Giá bán");
            headerRow.createCell(7).setCellValue("Nhà xuất bản");
            headerRow.createCell(8).setCellValue("Dịch giả");
            headerRow.createCell(9).setCellValue("Số trang");
            headerRow.createCell(10).setCellValue("Năm xuất bản");
            headerRow.createCell(11).setCellValue("Tác giả");
            headerRow.createCell(12).setCellValue("Danh mục");
            headerRow.createCell(13).setCellValue("Ngày tạo");
            headerRow.createCell(14).setCellValue("Ngày sửa");

            int rowNum = 1;
            for (ProductResponse p : list) {
                Row row = sheet.createRow(rowNum++);
                row.createCell(0).setCellValue(rowNum - 1);
                row.createCell(1).setCellValue(p.code());
                row.createCell(2).setCellValue(p.name());
                row.createCell(3).setCellValue(p.imgUrl());
                row.createCell(4).setCellValue(p.quantity());
                row.createCell(5).setCellValue(String.valueOf(p.price()));
                row.createCell(6).setCellValue(String.valueOf(p.sellPrice()));
                row.createCell(7).setCellValue(p.publisher());
                row.createCell(8).setCellValue(p.translator());
                row.createCell(9).setCellValue(p.numOfPages() == null ? null : p.numOfPages().toString());
                row.createCell(10).setCellValue(p.publishedYear() == null ? null : p.publishedYear().toString());
                row.createCell(11).setCellValue(p.author().name());
                row.createCell(12).setCellValue(p.category().name());
                row.createCell(13).setCellValue(p.createdAt().format(formatter));
                row.createCell(14).setCellValue(p.updatedAt().format(formatter));
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
}
