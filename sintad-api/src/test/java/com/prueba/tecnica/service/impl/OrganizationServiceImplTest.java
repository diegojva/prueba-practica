package com.prueba.tecnica.service.impl;

import com.prueba.tecnica.model.Contributor;
import com.prueba.tecnica.model.Document;
import com.prueba.tecnica.model.Organization;
import com.prueba.tecnica.repository.IOrganizationRepository;
import com.prueba.tecnica.service.IContributorService;
import com.prueba.tecnica.service.IDocumentService;
import com.prueba.tecnica.service.IOrganizationService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.BDDAssertions.then;
import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)
class OrganizationServiceImplTest {

    @Autowired
    private IOrganizationRepository organizationRepository;

    @Autowired
    private IDocumentService documentService;

    @Autowired
    private IContributorService contributorService;

    private Organization organization;

    @BeforeEach
    void setUp() {

        Document document = new Document();
        document = documentService.findById(1L);

        Contributor contributor = new Contributor();
        contributor = contributorService.findById(1L);

        organization = Organization.builder()
                        .id(3L)
                        .nroDocument("201456789111")
                        .address("Av. Los Alamos 123")
                        .phone("123456700")
                        .commercialName("Comercial 4")
                        .companyName("Empresa 4")
                        .contributor(contributor)
                        .document(document)
                        .status(true)
                        .build();
    }

    @Test
    void save() {
        Organization organizationSaved = organizationRepository.save(organization);
        assertNotNull(organizationSaved);
        assertEquals(organization, organizationSaved);
        then(organizationSaved.getNroDocument()).isEqualTo("201456789111");
    }

    @Test
    void findById() {
        Organization organizationFound = organizationRepository.findById(3L).orElse(null);
        assertNotNull(organizationFound);
        assertEquals(organization, organizationFound);
    }

    @Test
    void update() {
        Organization organizationFound = organizationRepository.findById(1L).orElse(null);
        assertNotNull(organizationFound);
        assertEquals(organization, organizationFound);
        organizationFound.setCompanyName("Empresa 2");
        organizationRepository.save(organizationFound);
        assertEquals("Empresa 2", organizationFound.getCompanyName());
    }

    @Test
    void delete() {
        Organization organizationFound = organizationRepository.findById(3L).orElse(null);
        assertNotNull(organizationFound);
        assertEquals(organization, organizationFound);
        organizationRepository.deleteById(organizationFound.getId());
        Organization organizationDeleted = organizationRepository.findById(3L).orElse(null);
        assertNull(organizationDeleted);
    }

    @Test
    void findAll() {
        assertNotNull(organizationRepository.findAll());
        organizationRepository.findAll().forEach(System.out::println);
    }
}