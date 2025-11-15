package com.PFE.gym.Service;

import com.PFE.gym.Entites.Admin;
import com.PFE.gym.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service //kol calass 3andha service mta3ha

public class AdminServiceImpl implements AdminService{
    @Autowired
    AdminRepository adminRepository;
    @Override
    public Admin ajouterAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    @Override
    public Admin modifierAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    @Override
    public List<Admin> afficherAdmin() {
        return adminRepository.findAll();
    }

    @Override
    public void supprimerAdmin(Long id) {
      adminRepository.deleteById(id);
    }

    @Override
    public Optional<Admin> AficherAdminById(Long id) {
        return adminRepository.findById(id);
    }
}
//jpa crud
//spring web Service