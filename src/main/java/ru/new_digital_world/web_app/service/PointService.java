package ru.new_digital_world.web_app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.new_digital_world.web_app.entity.Point;
import ru.new_digital_world.web_app.repository.PointRepository;

import java.util.List;

@Service
public class PointService {

    private PointRepository pointRepository;

    @Autowired
    public void setPointRepository(PointRepository pointRepository) {
        this.pointRepository = pointRepository;
    }

    public List<Point> getAllPoints() {
        return pointRepository.findAll();
    }

    public void saveUpdatePoint(Point point) {
        pointRepository.save(point);
    }

    public void deletePointById(Long id) {
        pointRepository.deleteById(id);
    }
    public Point getPointById(Long id){
        return pointRepository.getOne(id);
    }
}
