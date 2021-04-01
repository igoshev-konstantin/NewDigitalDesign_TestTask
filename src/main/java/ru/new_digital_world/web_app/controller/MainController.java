package ru.new_digital_world.web_app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import ru.new_digital_world.web_app.service.PointService;

@Controller
public class MainController {

    private PointService pointService;

    @RequestMapping("/check")
    public String testController(){

        return "";
    }

    @Autowired
    public void setPointService(PointService pointService) {
        this.pointService = pointService;
    }
}
