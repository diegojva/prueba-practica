package com.prueba.tecnica.controller;

import com.prueba.tecnica.model.Contributor;
import com.prueba.tecnica.service.IContributorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/contribuyentes")
public class ContributorController {

    @Autowired
    private IContributorService service;

    @PostMapping("/registrar")
    public ResponseEntity<Contributor> save(@Valid @RequestBody Contributor contributor) {
        Contributor contributorNew = service.save(contributor);
        return new ResponseEntity<>(contributorNew, HttpStatus.CREATED);
    }

    @PutMapping("/modificar")
    public ResponseEntity<Contributor> update(@Valid @RequestBody Contributor contributor) {
        Contributor contributorUpdate= service.update(contributor);
        return new ResponseEntity<>(contributorUpdate, HttpStatus.OK);
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<Contributor> findById(@PathVariable("id") Long id) {
        Contributor contributorFound= service.findById(id);
        return new ResponseEntity<>(contributorFound, HttpStatus.OK);
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Contributor>> findAll() {
        List<Contributor> contributors = service.findAll();
        return new ResponseEntity<>(contributors, HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
