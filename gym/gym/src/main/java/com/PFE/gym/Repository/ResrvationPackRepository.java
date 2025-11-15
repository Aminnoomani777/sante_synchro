package com.PFE.gym.Repository;

import com.PFE.gym.Entites.ReservationPack;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResrvationPackRepository extends JpaRepository<ReservationPack, Long> {


    List<ReservationPack> findByClientId(Long id);
}
