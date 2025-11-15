package com.PFE.gym.Entites;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity // comme table entity
@Getter
@Setter
@AllArgsConstructor// constructeur m3abi
@NoArgsConstructor// constructeur vide

public class ReservationPack {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id // cle primaire et aoto incrementy
    private Long id;
    @ManyToOne
    Client client;
    @ManyToOne
    Pack pack;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Pack getPack() {
        return pack;
    }

    public void setPack(Pack pack) {
        this.pack = pack;
    }
}
