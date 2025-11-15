package com.PFE.gym.Repository;

import com.PFE.gym.Entites.ReservationEntraineur;
import com.PFE.gym.Entites.ReservationPack;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationEntraineurRepository extends
        JpaRepository<ReservationEntraineur, Long> {


    List<ReservationEntraineur> findByClientId(Long id);
}
