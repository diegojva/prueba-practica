package com.prueba.tecnica.controller;

import com.prueba.tecnica.model.Document;
import com.prueba.tecnica.service.IDocumentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/documentos")
public class DocumentController {

    @Autowired
    private IDocumentService service;

    @PostMapping("/registrar")
    public ResponseEntity<Document> save(@Valid @RequestBody Document document) {
        Document documentNew = service.save(document);
        return new ResponseEntity<>(documentNew, HttpStatus.CREATED);
    }

    @PutMapping("/modificar")
    public ResponseEntity<Document> update(@Valid @RequestBody Document document) {
        Document documentUpdate= service.update(document);
        return new ResponseEntity<>(documentUpdate, HttpStatus.OK);
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<Document> findById(@PathVariable("id") Long id) {
        Document documentFound= service.findById(id);
        return new ResponseEntity<>(documentFound, HttpStatus.OK);
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Document>> findAll() {
        List<Document> documents = service.findAll();
        return new ResponseEntity<>(documents, HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
