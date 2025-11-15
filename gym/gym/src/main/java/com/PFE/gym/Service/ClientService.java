package com.PFE.gym.Service;

import com.PFE.gym.Entites.Client;
import jakarta.xml.ws.Response;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface ClientService {
   ResponseEntity<?> ajouterClient(Client client);
    Client modifierClient(Client client);
    List<Client> afficherClients();
    void supprimerClient(Long id);

    ResponseEntity<?> confirmEmail(String confirmationToken);

    Optional<Client> AficherClientById(Long id);


}
