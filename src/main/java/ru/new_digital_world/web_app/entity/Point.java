package ru.new_digital_world.web_app.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Point")
public class Point {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "pointNumber")
    private short pointNumber;

    @Column(name = "coordX")
    private double coordX;

    @Column(name = "coordY")
    private double coordY;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "point")
    private List<PointProperty> propertyList;
}
