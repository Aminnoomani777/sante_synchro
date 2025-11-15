import { Component } from '@angular/core';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-videocall',
  templateUrl: './videocall.component.html',
  styleUrls: ['./videocall.component.css']
})
export class VideocallComponent {
  constructor(private service: CrudService) { }
  IsCoachIn: boolean;
  IsClientIn: boolean;


  ngOnInit(): void {
    this.IsCoachIn = this.service.isCoachIn();
    this.IsClientIn = this.service.isClientIn();
    this.initializeZegoUIKit();
    
  }

  initializeZegoUIKit(): void {
    const appID = 878305881; // Remplacez par votre AppID ZegoCloud, doit être un nombre
    const serverSecret = 'b379e96bef8a380163de25a1ce68f7aa'; // Remplacez par votre ServerSecret ZegoCloud
    let coachInfo = this.service.getCoachInfo();
    let clientInfo = this.service.getClientInfo();
    // Utilisateur local
    const localUserID = 'local_user_' + new Date().getTime();
    let localUserName = '';

    if (this.IsCoachIn) {
      localUserName = coachInfo.nom;
    } else if (this.IsClientIn) {
      localUserName = clientInfo.nom;
    } else {
      localUserName = 'anonymous';
    }
    const roomID = 'room_test'; // Utilisez le même roomID pour tous les utilisateurs

    const localKitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, localUserID, localUserName);
    

    // Utilisateur distant
    const remoteUserID = 'remote_user_' + new Date().getTime();
    const remoteUserName = 'remote_user';

    const remoteKitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, remoteUserID, remoteUserName);

    // Joindre la salle en tant qu'utilisateur local
    const zegoUIKitPrebuilt = ZegoUIKitPrebuilt.create(localKitToken);
    zegoUIKitPrebuilt.joinRoom({
      container: document.getElementById('zego-container') as HTMLElement,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
     
      maxUsers:4,
    
      

    });

    // Simuler l'ajout d'un utilisateur distant
    this.addRemoteUser(remoteKitToken);
  }

  addRemoteUser(remoteKitToken: string): void {
    // Simulez la jonction de l'utilisateur distant dans la même salle
    const zegoUIKitRemote = ZegoUIKitPrebuilt.create(remoteKitToken);
    zegoUIKitRemote.joinRoom({
      container: document.getElementById('zego-container-remote') as HTMLElement,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      }
    });
  }

}
