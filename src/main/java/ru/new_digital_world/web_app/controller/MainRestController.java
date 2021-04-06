package ru.new_digital_world.web_app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.new_digital_world.web_app.service.PointService;

@RestController
@RequestMapping("/api")
public class MainRestController {

    private PointService pointService;

    @Autowired
    public void setPointService(PointService pointService) {
        this.pointService = pointService;
    }

//
//    @GetMapping("/addNewPoint")
//    public void addNewPoint(){
//
//    }


}
