package com.starkensin.giftbasket;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;

import org.springframework.context.event.EventListener;

@SpringBootApplication
public class GiftbasketApplication {

	public static void main(String[] args) {
		SpringApplication.run(GiftbasketApplication.class, args);
	}


	@Value("${spring.config.activate.on-profile}")
	private String app;

	@EventListener(ApplicationReadyEvent.class)
	public void init() {
		System.out.println("$==========================spring.config.activate.on-profile: "+app+"==========================");
	}
}
