package com.PFE.gym.Service;

import com.PFE.gym.Entites.Admin;

import java.util.List;
import java.util.Optional;

public interface AdminService {




    Admin ajouterAdmin(Admin admin);
    Admin modifierAdmin(Admin admin);
    List<Admin> afficherAdmin();
    void supprimerAdmin(Long id);
    Optional<Admin>AficherAdminById(Long id);

}
