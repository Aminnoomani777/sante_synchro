package com.PFE.gym.Service;

import com.PFE.gym.Entites.Planning;
import com.PFE.gym.Entites.SavePlanning;

import java.util.List;
import java.util.Optional;

public interface PlanningService {


    Planning ajouterplanning(SavePlanning model);

    List<Planning> afficherplanning();
    Optional<Planning> afficherplanninigbyid(Long id);
    List<Planning> getplanningByEntraineurId(Long idEntraineur);
}
