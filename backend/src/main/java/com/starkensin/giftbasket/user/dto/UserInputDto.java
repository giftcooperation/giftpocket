package com.starkensin.giftbasket.user.dto;

import com.starkensin.giftbasket.user.entity.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class UserInputDto {

    @Getter
    @NoArgsConstructor
    public static class UserInput {
        private Long id;
        private String userId;
        private String password;

        @Builder
        public UserInput(Long id, String userId, String password) {
            this.id = id;
            this.userId = userId;
            this.password = password;
        }

        public User toUserEntity() {
            return User.builder()
                    .userId(userId)
                    .password(password)
                    .build();
        }
    }
}
