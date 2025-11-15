package com.PFE.gym.RestController;

import com.PFE.gym.Entites.Client;
import com.PFE.gym.Entites.Entraineur;
import com.PFE.gym.Entites.SalleDeSport;
import com.PFE.gym.Repository.EntraineurRepository;
import com.PFE.gym.Repository.SalleDeSportRepository;
import com.PFE.gym.Service.EntraineurService;
import com.PFE.gym.Service.SalleDeSportService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/entraineur")
@CrossOrigin("*")
public class EntraineurRestController {
    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
    @Autowired
    private EntraineurService entraineurService;
    @Autowired
    private EntraineurRepository entraineurRepository;

    @RequestMapping(method = RequestMethod.POST )
    ResponseEntity<?> AjouterEntraineur (@RequestBody Entraineur entraineur ){

        HashMap<String, Object> response = new HashMap<>();
        if(entraineurRepository.existsByEmail(entraineur.getEmail())){
            response.put("message", "email exist deja !");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }else{
           entraineur.setMp(this.bCryptPasswordEncoder.encode(entraineur .getMp()));
           Entraineur savedUser = entraineurRepository.save(entraineur);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
        }
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Entraineur> Afficherentraineur(){
        return entraineurService.afficherEntraineur();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )
    public void SupprimerEntraineur(@PathVariable("id") Long id){
       entraineurService.supprimerEntraineur(id);

    }

    @RequestMapping(value = "/{id}" , method = RequestMethod.GET)
    public Optional<Entraineur> getEntraineurById(@PathVariable("id") Long id){



        Optional<Entraineur> Entraineur = entraineurService.AfficherEntraineurById(id);
        return Entraineur;
    }

    @RequestMapping(value = "/{id}" ,method = RequestMethod.PUT)
    public Entraineur ModifierEntraineur (@PathVariable("id")Long id, @RequestBody Entraineur entraineur){
        entraineur.setMp(this.bCryptPasswordEncoder.encode(entraineur.getMp()));

       Entraineur savedUser = entraineurRepository.save(entraineur);

Entraineur newEntraineur = entraineurService.modifierEntraineur(entraineur );
        return newEntraineur;
    }



    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginEntraineur(@RequestBody  Entraineur  entraineur) {
        System.out.println("in login- Entraineur" +  entraineur);
        HashMap<String, Object> response = new HashMap<>();

        Entraineur userFromDB =  entraineurRepository.findEntraineurByEmail( entraineur.getEmail());
        System.out.println("userFromDB+ Entraineur" + userFromDB);
        if (userFromDB == null) {
            response.put("message", " Entraineur not found!");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } else {
            boolean compare = this.bCryptPasswordEncoder.matches( entraineur.getMp(), userFromDB.getMp());
            System.out.println("compare" + compare);
            if (!compare) {
                response.put("message", "Password incorrect!");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            } else {
                String token = Jwts.builder()
                        .claim("data", userFromDB)
                        .signWith(SignatureAlgorithm.HS256, "SECRET")
                        .compact();
                response.put("token", token);

                System.out.println("hhh");
                return ResponseEntity.status(HttpStatus.OK).body(response);
            }

        }
    }

}
