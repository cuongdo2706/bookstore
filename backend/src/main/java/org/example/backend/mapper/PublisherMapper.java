package org.example.backend.mapper;

import org.example.backend.dto.response.PublisherResponse;
import org.example.backend.entity.Publisher;
import org.mapstruct.Mapper;

import java.util.List;
@Mapper(componentModel = "spring")
public interface PublisherMapper {
    PublisherResponse toPublisherResponse(Publisher publisher);
    List<PublisherResponse> toPublisherResponses(List<Publisher> publishers);
}
