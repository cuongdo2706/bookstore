package org.example.backend.mapper;

import org.example.backend.dto.response.UserResponse;
import org.example.backend.entity.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserMapper {
    public static UserResponse toUserResponse(User user){
        return new UserResponse(
                user.getId(),
                user.getCode(),
                user.getName(),
                user.getDob(),
                user.getGender(),
                user.getPhoneNum(),
                user.getAddress(),
                user.getEmail(),
                user.getIsActive(),
                user.getIsDeleted()
        );
    }

    public static List<UserResponse>toUserResponses(List<User>users){
        return users.stream()
                .map(UserMapper::toUserResponse)
                .toList();
    }
}
