package org.example.backend.mapper;

import org.example.backend.dto.response.PromotionResponse;
import org.example.backend.entity.Promotion;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PromotionMapper {
    PromotionResponse toPromotionResponse(Promotion promotion);

    List<PromotionResponse> toPromotionResponses(List<Promotion> promotions);
}
