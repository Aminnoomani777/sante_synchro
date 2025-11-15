package com.PFE.gym.Service;

import com.PFE.gym.Entites.ReservationEntraineur;
import com.PFE.gym.Entites.ReservationEntraineurRq;


import java.util.List;

public interface ReservationEntraineurService {
    ReservationEntraineur ajouterReservationEntraineur(ReservationEntraineurRq reservationEntraineurRq);
    List<ReservationEntraineur> listeReservationEntraineur();
    List<ReservationEntraineur>GetEntraineurByClient(Long id);


}
