package com.api.routine_organizer.exceptions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.api.routine_organizer.DTO.ResponseMessage;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @Autowired
    private ResponseMessage responseMessage;
    
    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<ResponseMessage> handleResponseStatusException(ResponseStatusException ex) {
        responseMessage.setMessage(ex.getReason());
        responseMessage.setStatus(ex.getStatusCode());
        return new ResponseEntity<ResponseMessage>(responseMessage, ex.getStatusCode());
    }

}