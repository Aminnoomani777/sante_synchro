import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { CrudService } from '../service/crud.service';
import { Salle } from '../Entity/Salle.Entities';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 
userDetails: any;
  totalAdmin: number = 0;
  totalClient: number = 0;
  totalEntraineur: number = 0;
  totalSalle: number = 0;
  chart: any = [];
  sallesDeSport: Salle[] = [];
  myGroup: FormGroup; // Define FormGroup

  constructor(private router: Router, private service: CrudService) {
    this.userDetails = this.service.userDetails();
    this.myGroup = new FormGroup({
      firstName: new FormControl() // Initialize FormControl
    });
    Chart.register(...registerables); // Register Chart.js components
  }

  ngOnInit(): void {
    
    this.service.getAdmin().subscribe(admin => {
      this.totalAdmin = admin.length
    });
    this.service.getClient().subscribe(client => {
      this.totalClient = client.length
    });
    this.service.getEntraineur().subscribe(entraineur => {
      this.totalEntraineur = entraineur.length
    });
    // Fetch data and initialize charts
    this.service.getSalle().subscribe(salle => {
      this.totalSalle = salle.length;
      this.sallesDeSport = salle;
      const sallesActives = this.sallesDeSport.filter(salle => salle.etat === true);
      const nombreSallesActives = sallesActives.length;
      const nombreTotalSalles = this.sallesDeSport.length;
      this.updateChart(nombreSallesActives, nombreTotalSalles);
      this.updatePercentageChart();
    });
  }

  updateChart(nombreSallesActives: number, nombreTotalSalles: number) {
    const circleChart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ["Salles actives", "Salles inactives"],
        datasets: [{
          label: 'Statistiques des salles de sport',
          data: [nombreSallesActives, nombreTotalSalles - nombreSallesActives],
          backgroundColor: ['#ff8a65', '#8B65D2'],
          borderColor: ['#ff8a65', '#8B65D2'],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                family: 'Arial',
                size: 14
              }
            }
          },
          title: {
            display: true,
            text: 'Statistiques des salles de sport',
            font: {
              family: 'Arial',
              size: 18,
              weight: 'bold'
            }
          }
        },
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20
          }
        }
      }
    });
  }

  updatePercentageChart() {
    const totalUsers = this.totalClient + this.totalEntraineur + this.totalSalle;
    const percentageClients = (this.totalClient / totalUsers) * 100;
    const percentageEntraineurs = (this.totalEntraineur / totalUsers) * 100;
    const percentageSalles = (this.totalSalle / totalUsers) * 100;
    const percentageChart = new Chart('percentageCanvas', {
      type: 'pie',
      data: {
        labels: ["Clients", "Entraineurs", "Salles de sport"],
        datasets: [{
          label: 'Pourcentage des utilisateurs',
          data: [percentageClients, percentageEntraineurs, percentageSalles],
          backgroundColor: ['#ff8a65', '#4bc0c0', '#8B65D2'],
          borderColor: ['#ff8a65', '#4bc0c0', '#8B65D2'],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                family: 'Arial',
                size: 14
              }
            }
          },
          title: {
            display: true,
            text: 'Pourcentage des utilisateurs sur la plateforme',
            font: {
              family: 'Arial',
              size: 18,
              weight: 'bold'
            }
          }
        },
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20
          }
        }
      }
    });
  }
}



