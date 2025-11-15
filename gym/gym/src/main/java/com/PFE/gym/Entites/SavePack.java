package com.PFE.gym.Entites;

import jakarta.persistence.Column;
import jakarta.persistence.Lob;

public class SavePack {


    private  Long id ;
    private String nom;
    private String prix;
    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private  String image;
    private String description;
    private Long idCategorie;
    private Long idSalleDeSport;
    public static Pack toEntity(SavePack model)
    {
        if
        (model==null)
        {

            return null;

        }
        Pack pack = new Pack();
        pack.setId(model.getId());
        pack.setNom(model.getNom());
        pack.setPrix(model.getPrix());
        pack.setImage(model.getImage());
        pack.setDescription(model.getDescription());
        return pack;


    }

    public Long getIdSalleDeSport() {
        return idSalleDeSport;
    }

    public void setIdSalleDeSport(Long idSalleDeSport) {
        this.idSalleDeSport = idSalleDeSport;
    }

    public Long getIdCategorie() {
        return idCategorie;
    }

    public void setIdCategorie(Long idCategorie) {
        this.idCategorie = idCategorie;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getPrix() {
        return prix;
    }

    public void setPrix(String prix) {
        this.prix = prix;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


}
