package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.SQLRestriction;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "tbl_image")
@SQLRestriction("is_deleted = false")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Image extends BaseEntity{
    @Column(nullable = false, unique = true)
    String publicId; //file id
    String relativePath; // Đường dẫn tương đối
    String fileExtension; //Đuôi file
    String originalName; //tên gốc
    Long fileSize; //kích thước file
    Integer width;
    Integer height;
    String contentType; //loại file
    @Builder.Default
    Boolean isDeleted=false;
}
