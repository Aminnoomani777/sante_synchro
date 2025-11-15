package com.PFE.gym.Service;

import com.PFE.gym.Entites.Client;
import com.PFE.gym.Entites.Planning;
import com.PFE.gym.Entites.Reservation;
import com.PFE.gym.Entites.ReservationRq;
import com.PFE.gym.Repository.ReservationRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service

public class ReservationServiceImpl implements ReservationService {


    @Autowired
    PlanningService planningService;
    @Autowired
    ClientService clientService;
    @Autowired
    ReservationRespository reservationRepository;


    @Override
    public Reservation AjouterReservation(ReservationRq reservationrq) {
        Optional<Planning> planning = planningService.afficherplanninigbyid(reservationrq.getIdPlanning());
        Optional<Client> client = clientService.AficherClientById(reservationrq.getIdClient());

        if (planning.isPresent() && client.isPresent()) {
            long existingReservationsCount = reservationRepository.countByPlanningIdAndClientId(reservationrq.getIdPlanning(), reservationrq.getIdClient());
            if (existingReservationsCount > 0) {
                throw new IllegalArgumentException("Client has already reserved this planning.");
            }

            long totalReservationsForPlanning = reservationRepository.countByPlanningId(reservationrq.getIdPlanning());
            if (totalReservationsForPlanning >= 3) {
                throw new IllegalArgumentException("This planning has already been reserved the maximum number of times.");
            }

            Reservation reservation = new Reservation();
            reservation.setPlanning(planning.get());
            reservation.setClient(client.get());
            return reservationRepository.save(reservation);
        } else {
            return null;
        }
    }

    @Override
    public List<Reservation> AfficherReservation() {
        return reservationRepository.findAll();
    }

    @Override
    public List<Reservation> listePlanningByClient(Long id) {
        return reservationRepository.findByclientId(id);
    }


}
