package com.prueba.tecnica.service.impl;

import com.prueba.tecnica.model.Document;
import com.prueba.tecnica.repository.IDocumentRepository;
import com.prueba.tecnica.repository.IGenericRepository;
import com.prueba.tecnica.service.IDocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DocumentServiceImpl extends CRUDimpl<Document, Long> implements IDocumentService {

    @Autowired
    private IDocumentRepository repo;

    @Override
    protected IGenericRepository<Document, Long> getRepo() {
        return repo;
    }
}
