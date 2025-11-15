package com.PFE.gym.Repository;



import com.PFE.gym.Entites.Entraineur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EntraineurRepository extends JpaRepository<Entraineur, Long> {
    boolean existsByEmail(String email);

    Entraineur findEntraineurByEmail(String email);
}



