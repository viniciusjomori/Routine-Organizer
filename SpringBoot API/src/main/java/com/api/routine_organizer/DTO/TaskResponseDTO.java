package com.api.routine_organizer.DTO;

import java.time.LocalTime;
import java.util.UUID;

import com.api.routine_organizer.enums.WeekDayName;
import com.fasterxml.jackson.annotation.JsonFormat;

public record TaskResponseDTO(
    UUID id,
    String name,
    WeekDayName day,
    @JsonFormat(pattern = "HH:mm")
    LocalTime time,
    boolean important
) {
    
}
