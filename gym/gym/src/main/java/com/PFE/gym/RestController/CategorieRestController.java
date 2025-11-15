package com.PFE.gym.RestController;

import com.PFE.gym.Entites.Categorie;
import com.PFE.gym.Entites.Contact;
import com.PFE.gym.Repository.CategorieRepository;
import com.PFE.gym.Service.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categorie")
@CrossOrigin("*")
public class CategorieRestController {

    @Autowired
    private CategorieService categorieService;
    @Autowired
    private CategorieRepository categorieRepository;

    @RequestMapping("/{id}")
    public Optional<Categorie> getCategorieById(@PathVariable Long id) {
        return categorieService.afficherCategorieById(id);
    }


    @RequestMapping(method = RequestMethod.POST)
    public Categorie ajouterCategorie(@RequestBody Categorie categorie) {


        return categorieService.ajouterCategorie(categorie);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Categorie> afficherCategories() {
        return categorieService.afficherCategories();
    }



    @RequestMapping(value = "/{id}" ,method = RequestMethod.PUT)
    public Categorie ModifierCategorie (@PathVariable("id")Long id, @RequestBody Categorie  categorie){


     Categorie  savedUser = categorieRepository.save(categorie);

      Categorie  newCategorie = categorieService.modifierCategorie (categorie );
        return newCategorie ;
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )
    public void SupprimerCategorie(@PathVariable("id") Long id){
       categorieService.supprimerCategorie(id);

    }
}
