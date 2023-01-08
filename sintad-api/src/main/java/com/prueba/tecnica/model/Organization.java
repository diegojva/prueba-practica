package com.prueba.tecnica.model;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tb_entidad")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Organization {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_entidad")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_tipo_documento", nullable = false, foreignKey = @ForeignKey(name = "FK_ENTIDAD_TIPO_DOCUMENTO"))
    private Document document;

    @ManyToOne
    @JoinColumn(name = "id_tipo_contribuyente", nullable = false, foreignKey = @ForeignKey(name = "FK_ENTIDAD_TIPO_CONTRIBUYENTE"))
    private Contributor contributor;

    @Column(name = "nro_documento", nullable = false, length = 25, unique = true)
    private String nroDocument;

    @Column(name = "razon_social", nullable = false, length = 100)
    private String companyName;

    @Column(name = "nombre_comercial", length = 100)
    private String commercialName;

    @Column(name = "direccion")
    private String address;

    @Column(name = "telefono")
    private String phone;

    @Column(name = "estado")
    private Boolean status;
}
