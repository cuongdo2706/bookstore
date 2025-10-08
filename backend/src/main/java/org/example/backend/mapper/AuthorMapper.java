package org.example.backend.mapper;

import org.example.backend.dto.response.AuthorResponse;
import org.example.backend.entity.Author;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface AuthorMapper {
    AuthorResponse toAuthorResponse(Author author);
    List<AuthorResponse> toAuthorResponses(List<Author> authors);
}
