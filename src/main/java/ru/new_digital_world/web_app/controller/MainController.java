package ru.new_digital_world.web_app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import ru.new_digital_world.web_app.service.PointService;

@Controller
public class MainController {

    private PointService pointService;

    @GetMapping("/")
    public String testController(){
        return "index";
        //return "MyView";
    }

    @Autowired
    public void setPointService(PointService pointService) {
        this.pointService = pointService;
    }
}
