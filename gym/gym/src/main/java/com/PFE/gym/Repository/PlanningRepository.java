package com.PFE.gym.Repository;

import com.PFE.gym.Entites.Planning;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface PlanningRepository extends JpaRepository<Planning,Long> {


    List<Planning> findByEntraineurId(Long idEntraineur);

    boolean existsByDateAndDebutAndFinAndEntraineur_Id(Date date, String debut, String fin, Long idEntraineur);
}
