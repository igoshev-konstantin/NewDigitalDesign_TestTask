package ru.new_digital_world.web_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.new_digital_world.web_app.entity.Point;

public interface PointRepository extends JpaRepository<Point, Long> {
}
