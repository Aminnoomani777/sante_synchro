package com.PFE.gym.Service;

import org.springframework.mail.SimpleMailMessage;

public interface EmailService {


    void sendEmail(SimpleMailMessage email);
}
