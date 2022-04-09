package com.starkensin.giftbasket.user.repository;

import com.starkensin.giftbasket.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {
}
