package com.PFE.gym.Service;

import com.PFE.gym.Entites.Contact;

import java.util.List;
import java.util.Optional;

public interface ContactService {
    Contact ajouterContact(Contact contact);

    List<Contact> afficherContacts();
    void supprimerContact(Long id);
    //code de notification

    long countUnreadContacts();

    void markAsRead(Long id);

    void markAllAsRead();


}
