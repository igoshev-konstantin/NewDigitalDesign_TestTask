package ru.new_digital_world.web_app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/")
public class MainController {

    public String testController(){

        return "it's check";
    }
}
