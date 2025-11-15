package com.PFE.gym.Service;

import com.PFE.gym.Entites.Admin;
import com.PFE.gym.Entites.Categorie;
import java.util.List;
import java.util.Optional;

public interface CategorieService {


    Categorie ajouterCategorie(Categorie categorie);
    Optional<Categorie> afficherCategorieById(Long id);
    List<Categorie> afficherCategories();

   Categorie modifierCategorie(Categorie categorie);

    void supprimerCategorie(Long id);
}
