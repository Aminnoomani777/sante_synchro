package com.PFE.gym.Service;

import com.PFE.gym.Entites.Categorie;
import com.PFE.gym.Entites.Pack;
import com.PFE.gym.Entites.SalleDeSport;
import com.PFE.gym.Entites.SavePack;
import com.PFE.gym.Repository.CategorieRepository;
import com.PFE.gym.Repository.PackRepository;
import com.PFE.gym.Repository.SalleDeSportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class PackServiceImpl implements PackService {
    @Autowired
    CategorieRepository categorieRepository;
    @Autowired
    SalleDeSportRepository salleDeSportRepository;
    @Autowired
    PackRepository packRepository;
    @Override
    public Pack ajouterPack(SavePack model) {
        Pack pack=SavePack.toEntity(model);
        System.out.println("idcategorie"+model.getIdCategorie());
        Categorie categorie= categorieRepository.findById(model.getIdCategorie()).get();
        pack.setCategorie(categorie);
        System.out.println("idsalleDeSport"+model.getIdSalleDeSport());
        SalleDeSport salleDeSport=salleDeSportRepository.findById(model.getIdSalleDeSport()).get();
        pack.setSalleDeSport(salleDeSport);
        return  packRepository.save(pack);
    }


    @Override
    public List<Pack> getPack() {
        return packRepository.findAll();
    }

    @Override
    public List<Pack> getPackBySalleDeSportId(Long id) {
        return  packRepository.findBySalleDeSportId(id);
    }

    @Override
    public Optional<Pack> GetPackById(Long id) {
        return packRepository.findById(id);
    }


}
