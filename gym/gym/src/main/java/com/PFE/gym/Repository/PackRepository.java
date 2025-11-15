package com.PFE.gym.Repository;

import com.PFE.gym.Entites.Pack;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PackRepository extends JpaRepository<Pack, Long> {
    List<Pack> findBySalleDeSportId(Long id);
}
