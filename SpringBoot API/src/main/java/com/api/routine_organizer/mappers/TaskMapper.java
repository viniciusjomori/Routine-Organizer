package com.api.routine_organizer.mappers;

import org.mapstruct.factory.Mappers;

import com.api.routine_organizer.DTO.TaskResponseDTO;
import com.api.routine_organizer.entities.TaskEntity;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TaskMapper {
    TaskMapper INSTACE = Mappers.getMapper(TaskMapper.class);

    TaskResponseDTO toResponseDTO(TaskEntity entity);
    Iterable<TaskResponseDTO> toListResponseDTO(Iterable<TaskEntity> entities);
}
