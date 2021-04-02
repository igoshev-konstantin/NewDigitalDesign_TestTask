package ru.new_digital_world.web_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication()
public class NewDigitalWorldApplication{

    public static void main(String[] args) {
        SpringApplication.run(NewDigitalWorldApplication.class, args);
    }

}
