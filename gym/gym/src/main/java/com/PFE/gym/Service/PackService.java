package com.PFE.gym.Service;

import com.PFE.gym.Entites.Pack;
import com.PFE.gym.Entites.SavePack;

import java.util.List;
import java.util.Optional;

public interface PackService {


    Pack ajouterPack(SavePack model);
    List<Pack> getPack();

    List<Pack> getPackBySalleDeSportId(Long id);

    Optional<Pack> GetPackById(Long id);
}
