package org.example.backend.dto.request;

import jakarta.validation.constraints.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UpdateCustomerRequest {
    String code;

    @NotBlank(message = "Name must have more than 1 digit")
    @NotNull(message = "Name cannot be null")
    String name;

    @Pattern(regexp = "^0\\d{9}$", message = "Phone number must begin with 0 and have 10 digits")
    String phoneNum;

    @PastOrPresent(message = "Date of birth must before or today")
    LocalDate dob;
    Boolean gender;
    Short provinceCode;
    String address;
    @Email(message = "Email format is invalid")
    String email;
}
