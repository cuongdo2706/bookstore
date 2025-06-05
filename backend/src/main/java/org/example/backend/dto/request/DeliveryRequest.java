package org.example.backend.dto.request;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Getter
@Setter
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DeliveryRequest {
    @NotNull
    String to_name;
    @NotNull
    String to_phone;
    @NotNull
    String to_address;
    @NotNull
    String to_ward_name;
    @NotNull
    String to_district_name;
    @NotNull
    String to_province_name;
    @PositiveOrZero
    BigDecimal cod_amount;
    String content;
    Integer payment_type_id;
}
