package org.example.backend.utility;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.example.backend.dto.response.BookResponse;
import org.springframework.stereotype.Component;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Component
public class ExcelUtil {
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");

    public ByteArrayInputStream exportExcel(List<BookResponse> list) {
        try (
                Workbook workbook = new XSSFWorkbook() ;
                ByteArrayOutputStream out = new ByteArrayOutputStream()
        ) {
            Sheet sheet = workbook.createSheet("Danh sách sản phẩm");
            Row headerRow = sheet.createRow(0);
            headerRow.createCell(0).setCellValue("Mã sách");
            headerRow.createCell(1).setCellValue("Tên sách");
            headerRow.createCell(2).setCellValue("Hình ảnh");
            headerRow.createCell(3).setCellValue("Số lượng");
            headerRow.createCell(4).setCellValue("Giá gốc");
            headerRow.createCell(5).setCellValue("Giá bán");
            headerRow.createCell(6).setCellValue("Nhà xuất bản");
            headerRow.createCell(7).setCellValue("Dịch giả");
            headerRow.createCell(8).setCellValue("Số trang");
            headerRow.createCell(9).setCellValue("Năm xuất bản");
            headerRow.createCell(10).setCellValue("Tác giả");
            headerRow.createCell(11).setCellValue("Danh mục");
            headerRow.createCell(12).setCellValue("Ngày tạo");
            headerRow.createCell(13).setCellValue("Ngày sửa");

            int rowNum = 1;
            for (BookResponse p : list) {
                Row row = sheet.createRow(rowNum++);
                row.createCell(0).setCellValue(p.code());
                row.createCell(1).setCellValue(p.name());
                row.createCell(2).setCellValue(p.imgUrl());
                row.createCell(3).setCellValue(p.quantity());
                row.createCell(4).setCellValue(String.valueOf(p.defaultPrice()));
                row.createCell(5).setCellValue(String.valueOf(p.sellPrice()));
                row.createCell(6).setCellValue(p.publisher());
                row.createCell(7).setCellValue(p.translator());
                row.createCell(8).setCellValue(p.numOfPages()==null?"Đang cập nhật":p.numOfPages().toString());
                row.createCell(9).setCellValue(p.publishedYear()==null?"Đang cập nhật":p.publishedYear().toString());
                row.createCell(10).setCellValue(p.author().name());
                row.createCell(11).setCellValue(p.category().name());
                row.createCell(12).setCellValue(p.createdAt().format(formatter));
                row.createCell(13).setCellValue(p.updatedAt().format(formatter));
            }
            workbook.write(out);
            return new ByteArrayInputStream(out.toByteArray());
        } catch (IOException ex) {
            throw new RuntimeException("Fail to export data to Excel file: " + ex.getMessage());
        }
    }
}
