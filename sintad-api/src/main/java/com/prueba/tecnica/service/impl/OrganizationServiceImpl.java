package com.prueba.tecnica.service.impl;

import com.prueba.tecnica.model.Organization;
import com.prueba.tecnica.repository.IGenericRepository;
import com.prueba.tecnica.repository.IOrganizationRepository;
import com.prueba.tecnica.service.IOrganizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class OrganizationServiceImpl extends CRUDimpl<Organization, Long> implements IOrganizationService {

    @Autowired
    private IOrganizationRepository repo;
    @Override
    protected IGenericRepository<Organization, Long> getRepo() {
        return repo;
    }

    @Override
    public Page<Organization> listPage(Pageable page) {
        return repo.findAll(page);
    }
}
