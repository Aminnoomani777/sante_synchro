package com.PFE.gym.RestController;

import com.PFE.gym.Entites.ReservationEntraineur;
import com.PFE.gym.Entites.ReservationEntraineurRq;
import com.PFE.gym.Entites.ReservationPack;
import com.PFE.gym.Entites.ReservationPackRq;
import com.PFE.gym.Service.ReservationEntraineurService;
import com.PFE.gym.Service.ResrvationPackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/entrraineurres")

public class ReservationEntraineurRestController {

    @Autowired
    ReservationEntraineurService reservationEntraineurService;
    @RequestMapping(method = RequestMethod.POST)
    public ReservationEntraineur ajouterReservation(@RequestBody ReservationEntraineurRq reservationEntraineurRq){
        System.out.println("reserverRq"+reservationEntraineurRq);
        return reservationEntraineurService.ajouterReservationEntraineur(reservationEntraineurRq);
    }
    @RequestMapping("get-all-by-id-Client/{id}")
    public List<ReservationEntraineur> listReservationByClient(@PathVariable Long id){
        return reservationEntraineurService.GetEntraineurByClient(id);
    }
    @RequestMapping(method = RequestMethod.GET )
    public List<ReservationEntraineur> afficherReservationEntraineur(){
        return reservationEntraineurService.listeReservationEntraineur();
    }



}
