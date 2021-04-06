package ru.new_digital_world.web_app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/addNewPoint")
    public String getAddingPointHTML(){
        return "addNewPoint";
    }
}
