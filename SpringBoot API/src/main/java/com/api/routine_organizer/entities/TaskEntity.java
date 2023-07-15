package com.api.routine_organizer.entities;

import java.time.LocalTime;
import java.util.UUID;

import com.api.routine_organizer.enums.WeekDayName;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="tb_task")
public class TaskEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    @Column
    private String name;
    @Column
    private WeekDayName day;
    @Column
    private LocalTime time;
    @Column
    private boolean important;

}
