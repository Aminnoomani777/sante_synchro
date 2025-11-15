package com.PFE.gym.RestController;

import com.PFE.gym.Entites.Admin;
import com.PFE.gym.Entites.Pack;
import com.PFE.gym.Entites.SalleDeSport;
import com.PFE.gym.Entites.SavePack;
import com.PFE.gym.Service.PackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/pack")
public class PackRestController {
    @Autowired
    PackService packService;
    @RequestMapping(method = RequestMethod.POST )
    public Pack AjouterPack(@RequestBody SavePack model){

        return packService.ajouterPack(model);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Pack> AfficherPack(){
        return packService.getPack();
    }
    @RequestMapping("get-all-by-id-salledesport/{id}")
    public List<Pack> listPackBySalleDeSport(@PathVariable Long id){
        return packService.getPackBySalleDeSportId(id);
    }

    @RequestMapping(value = "/{id}" , method = RequestMethod.GET)
    public Optional<Pack> getAdminById(@PathVariable("id") Long id){

        Optional<Pack> pack = packService.GetPackById(id);
        return pack;
    }
}
