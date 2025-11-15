package com.PFE.gym.Service;


import com.PFE.gym.Entites.Client;
import com.PFE.gym.Entites.Entraineur;
import com.PFE.gym.Entites.ReservationEntraineur;
import com.PFE.gym.Entites.ReservationEntraineurRq;
import com.PFE.gym.Repository.ReservationEntraineurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationEntraineurServiceImpl implements ReservationEntraineurService {

    @Autowired
    ReservationEntraineurRepository reservationEntraineurRepository;
    @Autowired
    ClientService clientService;
    @Autowired
   EntraineurService entraineurService;


    @Override
    public ReservationEntraineur ajouterReservationEntraineur(ReservationEntraineurRq reservationEntraineurRq) {
        Optional<Entraineur> entraineur = entraineurService.GetEntraineurById(reservationEntraineurRq.getIdEntraineur());
        Optional<Client> client = clientService.AficherClientById(reservationEntraineurRq.getIdClient());

        if (entraineur.isPresent() && client.isPresent()) {
            ReservationEntraineur reservationPack= new ReservationEntraineur();
            reservationPack.setEntraineur(entraineur.get());
            reservationPack.setClient(client.get());

            return reservationEntraineurRepository.save(reservationPack);
        }
        else
        {
            return null;
        }
    }

    @Override
    public List<ReservationEntraineur> listeReservationEntraineur() {
        return reservationEntraineurRepository.findAll();
    }

    @Override
    public List<ReservationEntraineur> GetEntraineurByClient(Long id) {
        return reservationEntraineurRepository.findByClientId(id);
    }
}
