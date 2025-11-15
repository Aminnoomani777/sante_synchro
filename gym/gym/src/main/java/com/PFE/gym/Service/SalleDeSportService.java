package com.PFE.gym.Service;

import com.PFE.gym.Entites.Admin;
import com.PFE.gym.Entites.Entraineur;
import com.PFE.gym.Entites.SalleDeSport;
import com.PFE.gym.Repository.SalleDeSportRepository;

import java.util.List;
import java.util.Optional;

public interface SalleDeSportService {

    SalleDeSport ajouterSalleDeSport(SalleDeSport salleDeSport);




    List<SalleDeSport> afficherSallesDeSport();
    void supprimerSalleDeSport(Long id);
    Optional<SalleDeSport> afficherSalleDeSportById(Long id);


    SalleDeSport modifierSalleDeSport(SalleDeSport salleDeSport,Long id);



}
