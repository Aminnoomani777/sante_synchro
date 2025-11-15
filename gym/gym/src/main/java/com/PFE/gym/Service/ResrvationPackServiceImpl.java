package com.PFE.gym.Service;


import com.PFE.gym.Entites.Client;
import com.PFE.gym.Entites.Pack;
import com.PFE.gym.Entites.ReservationPack;
import com.PFE.gym.Entites.ReservationPackRq;
import com.PFE.gym.Repository.ResrvationPackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service


public class ResrvationPackServiceImpl implements ResrvationPackService{

    @Autowired
    ResrvationPackRepository resrvationPackRepository;
    @Autowired
    ClientService clientService;
    @Autowired
    PackService packService;


    @Override
    public ReservationPack ajouterReservationPack(ReservationPackRq reservationPackRq) {
        Optional<Pack> pack = packService.GetPackById(reservationPackRq.getIdPack());
        Optional<Client> client = clientService.AficherClientById(reservationPackRq.getIdClient());

        if (pack.isPresent() && client.isPresent()) {
            ReservationPack reservationPack= new ReservationPack();
            reservationPack.setPack(pack.get());
            reservationPack.setClient(client.get());

            return resrvationPackRepository.save(reservationPack);
        }
        else
        {
            return null;
        }
    }

    @Override
    public List<ReservationPack> listeReservationPack()
    {
        return resrvationPackRepository.findAll();
    }

    @Override
    public List<ReservationPack> GetPackByClient(Long id) {
        return resrvationPackRepository.findByClientId(id);
    }
}
