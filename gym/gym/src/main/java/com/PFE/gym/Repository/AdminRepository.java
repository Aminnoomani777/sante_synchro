package com.PFE.gym.Repository;


import com.PFE.gym.Entites.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin,Long> {
    Admin findAdminByEmail(String email);

    boolean existsByEmail(String email);

}
