package ru.new_digital_world.web_app.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ru.new_digital_world.web_app.entity.enums.PropertiesTypes;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "PointProperty")
public class PointProperty {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "point_id")
    private Point point;

    @Enumerated(EnumType.STRING)
    private PropertiesTypes propertiesTypes;

    @Column(name = "id")
    private short value;

}
