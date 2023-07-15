package com.api.routine_organizer.controllers;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.routine_organizer.DTO.ResponseMessage;
import com.api.routine_organizer.DTO.TaskRequestDTO;
import com.api.routine_organizer.DTO.TaskResponseDTO;
import com.api.routine_organizer.entities.TaskEntity;
import com.api.routine_organizer.mappers.TaskMapper;
import com.api.routine_organizer.services.TaskService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("tasks")
@CrossOrigin(origins = "*")
public class TaskController {
    
    @Autowired
    private TaskService service;

    @Autowired
    private ResponseMessage responseMessage;

    @Autowired
    private TaskMapper mapper;

    @PostMapping
    public ResponseEntity<TaskResponseDTO> createTask(@RequestBody @Valid TaskRequestDTO dto) {
        TaskEntity task = service.createTask(dto);
        return new ResponseEntity<>(
            mapper.toResponseDTO(task),
            HttpStatus.CREATED
        );
    }

    @GetMapping
    public ResponseEntity<Iterable<TaskResponseDTO>> findAllTasks() {
        Iterable<TaskEntity> tasks = service.findAllTasks();
        return new ResponseEntity<>(
            mapper.toListResponseDTO(tasks),
            HttpStatus.OK
        );
    }

    @PutMapping("{id}")
    public ResponseEntity<TaskResponseDTO> updateTask(@RequestBody @Valid TaskRequestDTO dto, @PathVariable UUID id) {
        TaskEntity task = service.updateTask(dto, id);
        return new ResponseEntity<>(
            mapper.toResponseDTO(task),
            HttpStatus.OK
        );
    }

    @DeleteMapping("{id}")
    public ResponseEntity<ResponseMessage> deleteTask(@PathVariable UUID id) {
        service.deleteTaskById(id);
        responseMessage.setMessage("Successfully deleted");
        responseMessage.setStatus(HttpStatus.OK);
        return new ResponseEntity<>(
            responseMessage,
            HttpStatus.OK
        );
    }
}
