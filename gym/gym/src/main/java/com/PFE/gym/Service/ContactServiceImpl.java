package com.PFE.gym.Service;

import com.PFE.gym.Entites.Contact;
import com.PFE.gym.Repository.ContactRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ContactServiceImpl implements ContactService {



    @Autowired

    ContactRepository contactRepository;
    @Override
    public Contact ajouterContact(Contact contact) {
        return contactRepository.save(contact);
    }



    @Override
    public List<Contact> afficherContacts() { // Correct method name
        return contactRepository.findAll();
    }

    @Override
    public void supprimerContact(Long id) {
        contactRepository.deleteById(id);
    }
    public long countUnreadContacts() {
        return contactRepository.countByReadFalse();
    }

    public void markAsRead(Long id) {
        Optional<Contact> contactOpt = contactRepository.findById(id);
        if (contactOpt.isPresent()) {
            Contact contact = contactOpt.get();
            contact.setRead(true);
            contactRepository.save(contact);
        }




}



    public void markAllAsRead() {
        // Récupérer tous les contacts non lus
        List<Contact> unreadContacts = contactRepository.findByReadFalse();  // Changer ici

        // Marquer tous les contacts comme lus
        unreadContacts.forEach(contact -> contact.setRead(true));

        // Sauvegarder les contacts mis à jour
        contactRepository.saveAll(unreadContacts);


    }}
