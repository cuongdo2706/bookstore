package org.example.backend.mapper;

import org.example.backend.dto.response.AuthorResponse;
import org.example.backend.entity.Author;

import java.util.List;
import java.util.stream.Collectors;

public class AuthorMapper {
    public static AuthorResponse toAuthorResponse(Author author) {
        return new AuthorResponse(author.getId(), author.getName());
    }

    public static List<AuthorResponse> toAuthorResponses(List<Author> authors) {
        return authors.stream().map(AuthorMapper::toAuthorResponse).collect(Collectors.toList());
    }
}
