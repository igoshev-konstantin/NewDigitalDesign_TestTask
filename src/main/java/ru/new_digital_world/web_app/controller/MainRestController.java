package ru.new_digital_world.web_app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.new_digital_world.web_app.entity.Point;
import ru.new_digital_world.web_app.service.PointService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MainRestController {

    private PointService pointService;

    @Autowired
    public void setPointService(PointService pointService) {
        this.pointService = pointService;
    }


    @PostMapping("/savePoint")
    public void savePoint(@RequestBody Point point){
        if(!point.getName().isEmpty()){
            pointService.saveUpdatePoint(point);
            System.out.println("SavePoint");
        }else{
            System.out.println("invalid validation");
        }
    }


    @GetMapping(value = "/getAllPoints",
            headers = "Accept=application/json")
    @ResponseBody()
    public List<Point> getAllPoints(){
        return pointService.getAllPoints();
    }


}
