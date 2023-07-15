package com.api.routine_organizer.services;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.api.routine_organizer.DTO.TaskRequestDTO;
import com.api.routine_organizer.entities.TaskEntity;
import com.api.routine_organizer.repositories.TaskRepository;

@Service
public class TaskService {
    
    @Autowired
    private TaskRepository repository;

    public TaskEntity createTask(TaskRequestDTO dto) {
        TaskEntity task = new TaskEntity();
        BeanUtils.copyProperties(dto, task);
        return repository.save(task);
    }

    public Iterable<TaskEntity> findAllTasks() {
        return repository.findAll();
    }

    public TaskEntity updateTask(TaskRequestDTO dto, UUID id) {
        Optional<TaskEntity> op = repository.findById(id);
        if(op.isPresent()) {
            TaskEntity task = op.get();
            BeanUtils.copyProperties(dto, task);
            return repository.save(task);
        } else {
            throw new ResponseStatusException(
                HttpStatus.NOT_FOUND,
                "Task not found"
            );
        }
    }

    public void deleteTaskById(UUID id) {
        if(repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new ResponseStatusException(
                HttpStatus.NOT_FOUND,
                "Task not found"
            );
        }
    }
}
