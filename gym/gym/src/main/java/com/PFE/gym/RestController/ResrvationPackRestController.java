package com.PFE.gym.RestController;

import com.PFE.gym.Entites.ReservationPack;
import com.PFE.gym.Entites.ReservationPackRq;
import com.PFE.gym.Service.ResrvationPackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin("*")
@RequestMapping(value = "/packres")
public class ResrvationPackRestController {

    @Autowired
    ResrvationPackService resrvationPackService;
    @RequestMapping(method = RequestMethod.POST)
    public ReservationPack ajouterReservation(@RequestBody ReservationPackRq reservationPackRq){
        System.out.println("reserverRq"+reservationPackRq);
        return resrvationPackService.ajouterReservationPack(reservationPackRq);
    }
    @RequestMapping("get-all-by-id-Client/{id}")
    public List<ReservationPack> listReservationByClient(@PathVariable Long id){
        return resrvationPackService.GetPackByClient(id);
    }
    @RequestMapping(method = RequestMethod.GET )
    public List<ReservationPack> afficherReservationPack(){
        return resrvationPackService.listeReservationPack();
    }
}
