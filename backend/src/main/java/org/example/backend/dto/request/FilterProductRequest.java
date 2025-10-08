package org.example.backend.dto.request;

import jakarta.validation.constraints.Positive;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.example.backend.entity.Author;
import org.example.backend.entity.Category;
import org.example.backend.entity.Publisher;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class FilterProductRequest {
    @Positive(message = "Page must be greater than 0")
    Integer page = 1;
    @Positive(message = "Size must be greater than 0")
    Integer size = 10;
    String sortBy = "name";
    Boolean isActive = true;
    String nameOrCodeKeyword = null;
    List<Long>publisherIds=new ArrayList<>();
    List<Long>authorIds=new ArrayList<>();
    List<Long>categoryIds=new ArrayList<>();

}
