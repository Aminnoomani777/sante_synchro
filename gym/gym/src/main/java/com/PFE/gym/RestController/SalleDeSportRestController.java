package com.PFE.gym.RestController;

import com.PFE.gym.Entites.Admin;
import com.PFE.gym.Entites.Client;
import com.PFE.gym.Entites.Entraineur;
import com.PFE.gym.Entites.SalleDeSport;
import com.PFE.gym.Repository.SalleDeSportRepository;
import com.PFE.gym.Service.EmailSService;
import com.PFE.gym.Service.EmailService;
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
@RequestMapping(value = "/salleDeSport")
@CrossOrigin("*")
public class SalleDeSportRestController {

  final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        @Autowired
       SalleDeSportService salleDeSportService;
    @Autowired
   SalleDeSportRepository salleDeSportRepository;

    @Autowired
 EmailSService emailSService;
    @RequestMapping(method = RequestMethod.POST )
    ResponseEntity<?> AjouterSalle (@RequestBody SalleDeSport  salleDeSport ){

        HashMap<String, Object> response = new HashMap<>();
        if(salleDeSportRepository.existsByEmail(salleDeSport.getEmail())){
            response.put("message", "email exist deja !");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }else{
            salleDeSport.setMp(this.bCryptPasswordEncoder.encode(salleDeSport .getMp()));
            SalleDeSport savedUser = salleDeSportRepository.save(salleDeSport);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
        }
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<SalleDeSport> AffichersalleDeSport(){
        return salleDeSportService.afficherSallesDeSport();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )
    public void SupprimerSalleDeSport(@PathVariable("id") Long id){
        salleDeSportService.supprimerSalleDeSport(id);

    }

    @RequestMapping(value = "/{id}" , method = RequestMethod.GET)
    public Optional<SalleDeSport> getSalleDeSportById(@PathVariable("id") Long id){

        Optional<SalleDeSport> SalleDeSport = salleDeSportService.afficherSalleDeSportById(id);
        return SalleDeSport;
    }

    @RequestMapping(value = "/{id}" ,method = RequestMethod.PUT)
    public SalleDeSport ModifierSalleDeSport (@PathVariable("id")Long id, @RequestBody SalleDeSport salleDeSport){

        SalleDeSport newSalleDeSport = null;
        if (salleDeSportRepository.findById(id).isPresent()) { //ken user deja mawjoud
            SalleDeSport salleDeSport1 = salleDeSportRepository.findById(id).get();
            var fouid = salleDeSport.getId();
            var nom = salleDeSport.getNom();
            var adress = salleDeSport.getAdress();
            var tel = salleDeSport.getTelephone();
            var email = salleDeSport.getEmail();
            var mp = salleDeSport1.getMp();
            salleDeSport1.setId(fouid);
            salleDeSport1.setNom(nom);
            salleDeSport1.setAdress(adress);
            salleDeSport1.setTelephone(tel);
            salleDeSport1.setEmail(email);
            salleDeSport1.setMp(mp);

//mta3 yjih mail fih l etat
            salleDeSport.setMp(this.bCryptPasswordEncoder.encode(salleDeSport1.getMp()));
            if (salleDeSport.isEtat() != salleDeSport1.isEtat()) {
                //ternary expression
                String etat = salleDeSport1.isEtat() ? "Bloqué" : "Accepté";
                emailSService.SendSimpleMessage(salleDeSport1.getEmail(), "L'etat de votre compte", "votre compte a été " + etat);
            }
            salleDeSport1.setEtat(salleDeSport.isEtat());
            newSalleDeSport  = salleDeSportRepository.save(salleDeSport1);
        }
        return newSalleDeSport ;
    }



    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginSalleDeSport(@RequestBody SalleDeSport salleDeSport) {
        System.out.println("in login-SalleDeSport" + salleDeSport);
        HashMap<String, Object> response = new HashMap<>();

        SalleDeSport userFromDB = salleDeSportRepository.findSalleDeSportByEmail(salleDeSport.getEmail());
        System.out.println("userFromDB+SalleDeSport" + userFromDB);
        if (userFromDB == null) {
            response.put("message", "SalleDeSport not found!");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } else {
            boolean compare = this.bCryptPasswordEncoder.matches(salleDeSport.getMp(), userFromDB.getMp());
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