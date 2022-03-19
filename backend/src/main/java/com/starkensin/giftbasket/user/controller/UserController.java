package com.starkensin.giftbasket.user.controller;

import com.starkensin.giftbasket.user.dto.UserInputDto.UserInput;
import com.starkensin.giftbasket.user.entity.User;
import com.starkensin.giftbasket.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping
    public User createUser(@RequestBody UserInput userInput) {
        return userService.createUser(userInput);
    }

}
