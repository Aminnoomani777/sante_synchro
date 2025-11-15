package com.PFE.gym.Repository;

import com.PFE.gym.Entites.Admin;
import com.PFE.gym.Entites.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {

    Client findClientByEmail(String email);

    boolean existsByEmail(String email);

    Client findByEmail(String email);
}
