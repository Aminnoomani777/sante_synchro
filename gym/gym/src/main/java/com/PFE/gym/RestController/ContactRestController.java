package com.PFE.gym.RestController;

import com.PFE.gym.Entites.Contact;
import com.PFE.gym.Entites.Entraineur;
import com.PFE.gym.Repository.ContactRepository;
import com.PFE.gym.Service.ContactService;

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
@RequestMapping(value = "/contact")
@CrossOrigin("*")
public class ContactRestController {



    @Autowired
    ContactRepository contactRepository;

    @Autowired
    ContactService contactService;

    @RequestMapping(method = RequestMethod.POST)
    public Contact ajouterContact(@RequestBody Contact contact) {
        Contact savedUser = contactRepository.save(contact);


        return contactService.ajouterContact(contact);
    }



    @RequestMapping(method = RequestMethod.GET)
    public List<Contact> afficherContacts() { // Correct method name
        return contactService.afficherContacts();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )
    public void supprimerContact(@PathVariable("id") Long id){
        contactService.supprimerContact(id);
    }








}



