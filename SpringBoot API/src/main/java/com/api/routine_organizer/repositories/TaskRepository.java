package com.api.routine_organizer.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.routine_organizer.entities.TaskEntity;

@Repository
public interface TaskRepository extends JpaRepository<TaskEntity, UUID>{
}
