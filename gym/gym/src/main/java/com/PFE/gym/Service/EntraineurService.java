package com.PFE.gym.Service;

import com.PFE.gym.Entites.Entraineur;

import java.util.List;
import java.util.Optional;

public interface EntraineurService {
    Entraineur ajouterEntraineur(Entraineur entraineur);

    Entraineur modifierEntraineur(Entraineur entraineur);

    void supprimerEntraineur(Long id);

    List<Entraineur> afficherEntraineur();

    Optional<Entraineur> AfficherEntraineurById(Long id);

    Optional<Entraineur> GetEntraineurById(Long id);
}
