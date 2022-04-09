package com.starkensin.giftbasket.user.service;

import com.starkensin.giftbasket.user.dto.UserInputDto.UserInput;
import com.starkensin.giftbasket.user.entity.User;

public interface UserService {

    User createUser(UserInput userInput);

    User selectUser(Long id);
}
