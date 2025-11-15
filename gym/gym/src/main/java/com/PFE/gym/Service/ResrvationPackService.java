package com.PFE.gym.Service;

import com.PFE.gym.Entites.ReservationPack;
import com.PFE.gym.Entites.ReservationPackRq;

import java.util.List;

public interface ResrvationPackService {




    ReservationPack ajouterReservationPack(ReservationPackRq reservationPackRq);
    List<ReservationPack> listeReservationPack();
    List<ReservationPack>GetPackByClient(Long id);
}
