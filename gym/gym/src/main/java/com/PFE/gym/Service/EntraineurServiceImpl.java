package com.PFE.gym.Service;

import com.PFE.gym.Entites.Entraineur;
import com.PFE.gym.Repository.EntraineurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EntraineurServiceImpl implements EntraineurService {
    @Autowired
    private EntraineurRepository entraineurRepository;

    @Override
    public Entraineur ajouterEntraineur(Entraineur entraineur) {
        return entraineurRepository.save(entraineur);
    }

    @Override
    public Entraineur modifierEntraineur(Entraineur entraineur) {
        return entraineurRepository.save(entraineur);
    }

    @Override
    public List<Entraineur> afficherEntraineur() {
        return entraineurRepository.findAll();
    }

    @Override
    public void supprimerEntraineur(Long id) {
        entraineurRepository.deleteById(id);
    }

    @Override
    public Optional<Entraineur> AfficherEntraineurById(Long id) {
        return entraineurRepository.findById(id);
    }

    @Override
    public Optional<Entraineur> GetEntraineurById(Long id) {
        return entraineurRepository.findById(id);
    }
}
