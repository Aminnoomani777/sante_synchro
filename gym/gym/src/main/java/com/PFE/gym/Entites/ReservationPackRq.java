package com.PFE.gym.Entites;

public class ReservationPackRq {
    private  Long id;
    private  Long idClient;
    private Long idPack;

    public ReservationPackRq() {
    }

    public ReservationPackRq(Long idClient, Long idPack) {
        this.idClient = idClient;
        this.idPack = idPack;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdClient() {
        return idClient;
    }

    public void setIdClient(Long idClient) {
        this.idClient = idClient;
    }

    public Long getIdPack() {
        return idPack;
    }

    public void setIdPack(Long idPack) {
        this.idPack = idPack;
    }
}
