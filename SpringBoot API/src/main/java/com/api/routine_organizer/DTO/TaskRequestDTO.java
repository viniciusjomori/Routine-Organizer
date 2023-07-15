package com.api.routine_organizer.DTO;

import java.time.LocalTime;

import org.springframework.stereotype.Component;

import com.api.routine_organizer.enums.WeekDayName;

import lombok.Data;

@Data
@Component
public class TaskRequestDTO {

    private String name;
    private WeekDayName day;
    private LocalTime time;
    private boolean important;

}
