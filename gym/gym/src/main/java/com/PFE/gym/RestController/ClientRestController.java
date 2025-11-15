package com.PFE.gym.RestController;

import com.PFE.gym.Entites.Admin;
import com.PFE.gym.Entites.Client;
import com.PFE.gym.Repository.ClientRepository;


import com.PFE.gym.Service.ClientService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@RestController
@RequestMapping("/client")
@CrossOrigin("*")
public class ClientRestController {


        private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

        @Autowired
        ClientRepository clientRepository;

        @Autowired
        ClientService clientService;


    @RequestMapping(method = RequestMethod.POST )
    ResponseEntity<?> AjouterClient (@RequestBody Client  client ){

return clientService.ajouterClient(client);


    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Client> AfficherClient(){
        return clientService.afficherClients();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )
    public void SupprimerClient(@PathVariable("id") Long id){
        clientService.supprimerClient(id);

    }

    @RequestMapping(value = "/{id}" , method = RequestMethod.GET)
    public Optional<Client> getClientById(@PathVariable("id") Long id){

        Optional<Client> client = clientService.AficherClientById(id);
        return client;
    }

    @RequestMapping(value = "/{id}" ,method = RequestMethod.PUT)
    public Client  ModifierClient (@PathVariable("id")Long id, @RequestBody Client  client){
        client .setMp(this.bCryptPasswordEncoder.encode(client.getMp()));

        Client  savedUser = clientRepository.save(client);

        Client  newClient = clientService.modifierClient (client );
        return newClient ;
    }



    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginClient(@RequestBody Client client) {
        System.out.println("in login-client" + client);
        HashMap<String, Object> response = new HashMap<>();

        Client userFromDB = clientRepository.findClientByEmail(client.getEmail());
        System.out.println("userFromDB+Client" + userFromDB);
        if (userFromDB == null) {
            response.put("message", "client not found!");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } else {
            boolean compare = this.bCryptPasswordEncoder.matches(client.getMp(), userFromDB.getMp());
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


    @RequestMapping(value="/confirm-account", method= {RequestMethod.GET, RequestMethod.POST})
    public ResponseEntity<?> confirmUserAccount(@RequestParam("token")String confirmationToken) {
        return clientService.confirmEmail(confirmationToken);
    }

    private static final String GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/tokeninfo?id_token=";

    @PostMapping("/login-google")
    public ResponseEntity<Map<String, Object>> loginWithGoogle(@RequestParam("id_token") String idToken) {
        Map<String, Object> response = new HashMap<>();
        try {
            String googleUserInfo = validateGoogleToken(idToken);
            JsonNode userInfo = new ObjectMapper().readTree(googleUserInfo);

            String email = userInfo.get("email").asText();
            String fullName = userInfo.get("name").asText();
            String firstName = fullName.split(" ")[0]; // Prenons le prénom comme étant la première partie du nom complet
            String lastName = fullName.split(" ").length > 1 ? fullName.split(" ")[1] : ""; // Nom de famille s'il existe

            Client existingClient = clientRepository.findClientByEmail(email);

            if (existingClient == null) {

                Client newClient = new Client();
                newClient.setEmail(email);
                newClient.setNom(lastName); // Nom
                newClient.setPrenom(firstName); // Prénom
                newClient.setMp("defaultPassword"); // Mot de passe temporaire, à changer plus tard
                newClient.setEtat(true);  // Statut actif

                clientRepository.save(newClient);
                existingClient = newClient;
            }

            String token = generateToken(existingClient);
            response.put("token", token);

            return ResponseEntity.ok(response);

        } catch (IOException e) {
            response.put("message", "Erreur lors du traitement du token Google : " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } catch (Exception e) {
            response.put("message", "Une erreur inconnue est survenue.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    private String validateGoogleToken(String idToken) {
        String url = GOOGLE_TOKEN_URL + idToken;
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, String.class);
    }

    private String generateToken(Client client) {
        return Jwts.builder()
                .claim("data", client)
                .signWith(SignatureAlgorithm.HS256, "SECRET_KEY")
                .compact();
    }



}

