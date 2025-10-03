package org.example.backend.mapper;

import org.example.backend.dto.response.PublisherResponse;
import org.example.backend.entity.Publisher;

import java.util.List;

public class PublisherMapper {
    public static PublisherResponse toPublisherResponse(Publisher publisher) {
        return new PublisherResponse(publisher.getId(), publisher.getName());
    }

    public static List<PublisherResponse> toPublisherResponses(List<Publisher> publishers) {
        return publishers.stream().map(PublisherMapper::toPublisherResponse).toList();
    }
}
