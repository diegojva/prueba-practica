package com.prueba.tecnica.service;

import com.prueba.tecnica.model.Organization;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IOrganizationService extends ICRUD<Organization, Long> {

    Page<Organization> listPage(Pageable page);
}
