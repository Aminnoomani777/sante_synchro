package com.PFE.gym.Entites;

public class ReservationEntraineurRq {

    private  Long id;
    private  Long idClient;
    private Long idEntraineur;

    public ReservationEntraineurRq() {
    }

    public ReservationEntraineurRq(Long id, Long idClient, Long idEntraineur) {
        this.id = id;
        this.idClient = idClient;
        this.idEntraineur = idEntraineur;
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

    public Long getIdEntraineur() {
        return idEntraineur;
    }

    public void setIdEntraineur(Long idEntraineur) {
        this.idEntraineur = idEntraineur;
    }
}
