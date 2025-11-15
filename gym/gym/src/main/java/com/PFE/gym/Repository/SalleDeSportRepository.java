package com.PFE.gym.Repository;



import com.PFE.gym.Entites.Client;
import com.PFE.gym.Entites.Entraineur;
import com.PFE.gym.Entites.SalleDeSport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalleDeSportRepository extends JpaRepository<SalleDeSport, Long> {


  SalleDeSport findSalleDeSportByEmail(String email) ;



    boolean existsByEmail(String email);


}

