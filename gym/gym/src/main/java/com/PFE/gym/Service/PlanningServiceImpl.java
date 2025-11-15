package com.PFE.gym.Service;

import com.PFE.gym.Entites.Entraineur;
import com.PFE.gym.Entites.Planning;
import com.PFE.gym.Entites.SavePlanning;
import com.PFE.gym.Repository.EntraineurRepository;
import com.PFE.gym.Repository.PlanningRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class PlanningServiceImpl implements PlanningService{

    @Autowired
    PlanningRepository planningRepository;
    @Autowired
    EntraineurRepository entraineurRepository;

    @Override
    public Planning ajouterplanning(SavePlanning model) {
        Planning planning=SavePlanning.toEntity(model);
        System.out.println("identraineur"+model.getIdEntraineur());
        Entraineur entraineur=entraineurRepository.findById(model.getIdEntraineur()).get();
        planning.setEntraineur(entraineur);

        return planningRepository.save(planning);
    }

    @Override
    public List<Planning> afficherplanning() {
        return planningRepository.findAll();
    }
    @Override
    public Optional<Planning> afficherplanninigbyid(Long id) {
        return planningRepository.findById(id);
    }

    @Override
    public List<Planning> getplanningByEntraineurId(Long idEntraineur) {
        return planningRepository.findByEntraineurId(idEntraineur);
    }

}
