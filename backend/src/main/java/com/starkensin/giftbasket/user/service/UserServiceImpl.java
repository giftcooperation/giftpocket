package com.starkensin.giftbasket.user.service;

import com.starkensin.giftbasket.user.dto.UserInputDto.UserInput;
import com.starkensin.giftbasket.user.entity.User;
import com.starkensin.giftbasket.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User createUser(UserInput userInput) {
        return userRepository.save(userInput.toUserEntity());
    }

    @Override
    public User selectUser(Long id) {
        return null;
    }
}
