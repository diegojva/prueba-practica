package com.prueba.tecnica.service.impl;

import com.prueba.tecnica.model.Contributor;
import com.prueba.tecnica.repository.IContributorRepository;
import com.prueba.tecnica.repository.IGenericRepository;
import com.prueba.tecnica.service.IContributorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContributorServiceImpl extends CRUDimpl<Contributor, Long> implements IContributorService {

    @Autowired
    private IContributorRepository repo;
    @Override
    protected IGenericRepository<Contributor, Long> getRepo() {
        return repo;
    }
}
