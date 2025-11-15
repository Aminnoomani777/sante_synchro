package com.PFE.gym.Entites;

import java.util.Date;

public class SavePlanning {


    private Long id;
    private String nom;
    private Date date;
    private String debut;
    private String fin;
    private Long idEntraineur;

    public static Planning toEntity(SavePlanning model)
    {
        if(model == null)
        {
            return null ;
        }
        Planning planning=new Planning();
        planning.setId(model.getId());
        planning.setNom(model.getNom());
        planning.setDate(model.getDate());
        planning.setDebut(model.getDebut());
        planning.setFin(model.getFin());

        return planning;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDebut() {
        return debut;
    }

    public void setDebut(String debut) {
        this.debut = debut;
    }

    public String getFin() {
        return fin;
    }

    public void setFin(String fin) {
        this.fin = fin;
    }

    public Long getIdEntraineur() {
        return idEntraineur;
    }

    public void setIdEntraineur(Long idEntraineur) {
        this.idEntraineur = idEntraineur;
    }
}
