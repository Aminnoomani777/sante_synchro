package com.PFE.gym.Service;

import com.PFE.gym.Entites.Admin;
import com.PFE.gym.Entites.SalleDeSport;
import com.PFE.gym.Repository.SalleDeSportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SalleDeSportServiceImpl implements SalleDeSportService {

    @Autowired
    SalleDeSportRepository salleDeSportRepository;

    @Override
    public SalleDeSport ajouterSalleDeSport(SalleDeSport salleDeSport) {
        return salleDeSportRepository.save(salleDeSport);
    }


    @Override
    public List<SalleDeSport> afficherSallesDeSport() {
        return salleDeSportRepository.findAll();
    }

    @Override
    public void supprimerSalleDeSport(Long id) {
        salleDeSportRepository.deleteById(id);
    }

    @Override
    public Optional<SalleDeSport> afficherSalleDeSportById(Long id) {
        return salleDeSportRepository.findById(id);
    }

    @Override
    public SalleDeSport modifierSalleDeSport(SalleDeSport salleDeSport ,Long id) {
        return salleDeSportRepository.save(salleDeSport);
    }
}
