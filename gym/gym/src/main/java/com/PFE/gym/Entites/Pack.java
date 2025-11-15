package com.PFE.gym.Entites;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pack {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)




    private  Long  id ;
    private String  nom;

   private String    prix;
    @Lob
    @Column(columnDefinition = "LONGTEXT")
   private  String image;
   private String description;
   @ManyToOne
   Categorie categorie;
    @ManyToOne SalleDeSport salleDeSport;



    public SalleDeSport getSalleDeSport() {
        return salleDeSport;
    }

    public void setSalleDeSport(SalleDeSport salleDeSport) {
        this.salleDeSport = salleDeSport;
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

    public String getPrix() {
        return prix;
    }

    public void setPrix(String prix) {
        this.prix = prix;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }



    public Categorie getCategorie() {
        return categorie;
    }
    public void setCategorie(Categorie categorie) {
        this.categorie = categorie;
    }
}
