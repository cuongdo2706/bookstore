package org.example.backend.service.impl;

import org.example.backend.dto.request.CreateAttributeRequest;
import org.example.backend.dto.response.PublisherResponse;
import org.example.backend.entity.Publisher;
import org.example.backend.exception.DataExistedException;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.mapper.PublisherMapper;
import org.example.backend.repository.PublisherRepository;
import org.example.backend.service.PublisherService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PublisherServiceImpl implements PublisherService {
    private final PublisherRepository publisherRepository;
    private final PublisherMapper publisherMapper;

    public PublisherServiceImpl(PublisherRepository publisherRepository, PublisherMapper publisherMapper) {
        this.publisherRepository = publisherRepository;
        this.publisherMapper = publisherMapper;
    }

    @Override
    public List<PublisherResponse> findAll() {
        return publisherMapper.toPublisherResponses(publisherRepository.findAll());
    }

    @Override
    public Publisher findById(Long id) throws DataNotFoundException {
        return publisherRepository.findById(id).orElseThrow(() -> new DataNotFoundException("Publisher Not Found"));
    }

    @Override
    public PublisherResponse save(CreateAttributeRequest request) throws DataExistedException {
        if (existsByName(request.getName())) {
            throw new DataExistedException("Publisher name existed");
        }
        Publisher publisher = Publisher.builder()
                .name(request.getName())
                .build();
        return publisherMapper.toPublisherResponse(publisherRepository.save(publisher));
    }

    @Override
    public boolean existsByName(String name) {
        return publisherRepository.existsByName(name);
    }
}
