package com.PFE.gym.Repository;

import com.PFE.gym.Entites.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRespository extends JpaRepository<Reservation,Long> {
    long countByPlanningIdAndClientId(long idPlanning, long idClient);

    long countByPlanningId(long idPlanning);

    List<Reservation> findByclientId(Long id);
}
