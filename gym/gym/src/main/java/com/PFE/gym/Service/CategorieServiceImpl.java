package com.PFE.gym.Service;

import com.PFE.gym.Entites.Admin;
import com.PFE.gym.Entites.Categorie;
import com.PFE.gym.Repository.CategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategorieServiceImpl implements CategorieService {
    @Override
    public Categorie ajouterCategorie(Categorie categorie) {
        return categorieRepository.save(categorie);
    }

    @Autowired
    private CategorieRepository categorieRepository;

    @Override
    public List<Categorie> afficherCategories() {
        return categorieRepository.findAll();
    }

    @Override
    public Optional<Categorie> afficherCategorieById(Long id) {
        return categorieRepository.findById(id);
    }


    @Override
    public Categorie modifierCategorie(Categorie categorie) {
        return categorieRepository.save(categorie);
    }



    @Override
    public void supprimerCategorie(Long id) {
        categorieRepository.deleteById(id);
    }
}
