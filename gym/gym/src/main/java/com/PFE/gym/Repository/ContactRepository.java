package com.PFE.gym.Repository;

import com.PFE.gym.Entites.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;








    @Repository
    public interface ContactRepository extends JpaRepository<Contact,Long> {

        long countByReadFalse();  // OK

       ;  // pour récupérer tous les contacts non lus

        boolean existsByEmail(String email);

        Contact findContactByEmail(String email);

        List<Contact> findByReadFalse();
    }


