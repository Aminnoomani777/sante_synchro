package com.PFE.gym.RestController;

import com.PFE.gym.Entites.Planning;
import com.PFE.gym.Entites.SavePlanning;
import com.PFE.gym.Repository.PlanningRepository;
import com.PFE.gym.Service.PlanningService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping(value = "/planning")
@CrossOrigin("*")
public class PlanningRestController {


    @Autowired
    PlanningService planningService;
    @Autowired
    PlanningRepository planningRepository;
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> ajouterPlanningCoach(@RequestBody SavePlanning model) {
        // Convertir SavePlanningC en PlanningC
        Planning planning = SavePlanning.toEntity(model);

        // Vérifier si un planning existe déjà pour cette date, début, fin et idCoach
        if (planningRepository.existsByDateAndDebutAndFinAndEntraineur_Id(
                model.getDate(), model.getDebut(), model.getFin(), model.getIdEntraineur())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Ce planning existe déjà pour ce coach !");
        } else {
            // Ajouter le planning via le service
            Planning savedPlanning = planningService.ajouterplanning(model);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedPlanning);
        }
    }


    @RequestMapping(method = RequestMethod.GET )
    public List<Planning> afficherPlanning(){
        return planningService.afficherplanning();
    }
    @RequestMapping("get-all-by-id-Entraineur/{idEntraineur}")
    public List<Planning> listPlanningByEntraineur(@PathVariable Long idEntraineur){
        return planningService.getplanningByEntraineurId(idEntraineur);
    }
}
