package com.prueba.tecnica.controller;

import com.prueba.tecnica.model.Organization;
import com.prueba.tecnica.service.IOrganizationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/entidades")
public class OrganizationController {

    @Autowired
    private IOrganizationService service;

    @PostMapping("/registrar")
    public ResponseEntity<Organization> save(@RequestBody Organization organization) {
        Organization organizationNew = service.save(organization);
        return new ResponseEntity<>(organizationNew, HttpStatus.CREATED);
    }

    @PutMapping("/modificar")
    public ResponseEntity<Organization> update(@Valid @RequestBody Organization organization) {
        Organization organizationUpdate= service.update(organization);
        return new ResponseEntity<>(organizationUpdate, HttpStatus.OK);
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<Organization> findById(@PathVariable("id") Long id) {
        Organization organizationFound= service.findById(id);
        return new ResponseEntity<>(organizationFound, HttpStatus.OK);
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Organization>> findAll() {
        List<Organization> organizations = service.findAll();
        return new ResponseEntity<>(organizations, HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/pageable")
    public ResponseEntity<Page<Organization>> listPage(Pageable pageable){
        Page<Organization> page = service.listPage(pageable);

        return new ResponseEntity<>(page, HttpStatus.OK);
    }

}
