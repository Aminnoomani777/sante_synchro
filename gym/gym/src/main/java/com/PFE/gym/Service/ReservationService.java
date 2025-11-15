package com.PFE.gym.Service;

import com.PFE.gym.Entites.Reservation;
import com.PFE.gym.Entites.ReservationRq;

import java.util.List;

public interface ReservationService {
    Reservation AjouterReservation(ReservationRq reservationRQ);
    List<Reservation> AfficherReservation();
    List<Reservation> listePlanningByClient(Long id );

}
