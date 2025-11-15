package com.PFE.gym.Entites;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;


@Entity
@Data
@AllArgsConstructor// constructeur m3abi
@NoArgsConstructor
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String email;
    private String telephone;
    private String message;
    private String sujet;
    @Column(name = "`read`")
    private boolean read = false;

    public boolean isRead() {
        return read;
    }

    public void setRead(boolean read) {
        this.read = read;
    }
    @Column(updatable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;

    private int etat = 0;

    public Contact() {
    }



    public int getEtat() {
        return etat;
    }

    public void setEtat(int etat) {
        this.etat = etat;
    }






    public void setId(Long id) {
        this.id = id;
    }



    public Long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Contact(Long id, String nom, String email, String telephone, String message, String sujet, int etat) {
        this.id = id;
        this.nom = nom;
        this.email = email;
        this.telephone = telephone;
        this.message = message;
        this.sujet = sujet;
        this.etat = etat;
    }

    public String getSujet() {
        return sujet;
    }

    public void setSujet(String sujet) {
        this.sujet = sujet;
    }


}
