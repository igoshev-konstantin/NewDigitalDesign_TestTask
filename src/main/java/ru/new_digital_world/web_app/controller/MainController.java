package ru.new_digital_world.web_app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import ru.new_digital_world.web_app.entity.Point;
import ru.new_digital_world.web_app.service.PointService;

@Controller
public class MainController {

    private PointService pointService;

    @Autowired
    public void setPointService(PointService pointService) {
        this.pointService = pointService;
    }

    @GetMapping("/addNewPoint")
    public String getAddingPointHTML(@RequestParam(value = "id", required = false) Long id, Model model) {
        if(id!=null) {
            Point point = pointService.getPointById(id);
            model.addAttribute("pointId", id);
            model.addAttribute("pointName", point.getName());
            model.addAttribute("pointNumber", point.getPointNumber());
            model.addAttribute("pointCoordX", point.getCoordX());
            model.addAttribute("pointCoordY", point.getCoordY());
        }
        return "addNewPoint";
    }

    @GetMapping("/map")
    public String getMap() {
        return "map";
    }

//    @GetMapping(value = "/editPoint")
//    public String editPointById(@RequestParam(value = "id", required = false) Long id, Model model) {
//        model.addAttribute("pointId", id);
//        return "redirect:/addNewPoint";
//    }
}
