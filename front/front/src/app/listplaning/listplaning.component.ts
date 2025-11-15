import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CrudService } from '../service/crud.service';
import { SavePlanning } from '../Entity/SavaPlaning.Entities';
import Swal from 'sweetalert2';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { isSameMonth, isSameDay } from 'date-fns';

@Component({
  selector: 'app-listplaning',
  templateUrl: './listplaning.component.html',
  styleUrls: ['./listplaning.component.css']
})
export class ListplaningComponent {

  PlanningCForm: FormGroup;

  constructor(
    private service: CrudService,
    private router: Router,
    private fb: FormBuilder //private toast: NgToastService
  ) {
    let formControls = {
      nom: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      debut: new FormControl('', [Validators.required]),
      fin: new FormControl('', [Validators.required]),
    };
    this.PlanningCForm = this.fb.group(formControls);
  }
  get nom() {
    return this.PlanningCForm.get('nom');
  }
  get date() {
    return this.PlanningCForm.get('date');
  }
  get debut() {
    return this.PlanningCForm.get('debut');
  }
  get fin() {
    return this.PlanningCForm.get('fin');
  }

  addNewPlanningC() {
    let datas = this.service.getCoachInfo();
    let data = this.PlanningCForm.value;
    console.log(data);
    let model: SavePlanning = new SavePlanning();
    model.id = null;
    model.nom = data.nom;
    model.date = data.date;
    model.debut = data.debut;
    model.fin = data.fin;
    model.idEntraineur = datas?.id;

    if (!data.nom || !data.date || !data.debut || !data.fin) {
      Swal.fire({
        title: 'Erreur',
        text: 'Tous les champs sont obligatoires.',
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    this.service.addPlanning(model).subscribe(
      (res) => {
        console.log(res);
        Swal.fire({
          title: 'Succès !',
          text: 'Planning ajouté avec succès.',
          icon: 'success',
          showConfirmButton: false,
          timer: 3000,
        });
        // Update viewDate to the new event's date
        this.viewDate = new Date(data.date);
        // Refresh the calendar data
        this.fetchAndDisplayPlanningData();
        this.PlanningCForm.reset();
      },
      (error) => {
        console.log(error);
        Swal.fire({
          title: 'Erreur',
          text: error.error.message || 'Problème de serveur.',
          icon: 'error',
          showConfirmButton: false,
          timer: 3000,
        });
      }
    );
  }
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [
    // Définissez vos événements ici
  ];
  refresh: Subject<any> = new Subject();
  activeDayIsOpen: boolean = true;

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  handleEvent(action: string, event: CalendarEvent): void {
    // Implémentez la logique pour gérer l'événement ici
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    // Implémentez la logique pour gérer le changement de temps de l'événement ici
  }

  addEvent(): void {}
  fetchAndDisplayPlanningData() {
    let datas = this.service.getCoachInfo();
    this.service.getPlanning(datas.id).subscribe(
      (planningData: any[]) => {
        console.log(planningData);
        this.events = [];
        const today = new Date();

        planningData.forEach((data) => {
          // Extract only the date part (YYYY-MM-DD)
          const datePart = data.date.split('T')[0]; // "2025-05-06"
          // Combine with time
          const startDateTime =`${datePart}T${data.debut}:00`; // "2025-05-06T00:41:00"
          const endDateTime =`${datePart}T${data.fin}:00`; // "2025-05-06T02:41:00"

          const eventEnd = new Date(endDateTime);
          const color =
            eventEnd < today
              ? 'rgba(255, 0, 0, 0.5)'
              : 'rgba(30, 144, 255, 0.5)';

          const event: CalendarEvent = {
            start: new Date(startDateTime),
            end: new Date(endDateTime),
            title: data.nom,
            color: {
              primary: color,
              secondary: color,
            },
          };

          // Log the event to verify
          console.log('Created event:', event);

          this.events.push(event);
        });

        this.refresh.next(this.events);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.fetchAndDisplayPlanningData();
  }


  

}
