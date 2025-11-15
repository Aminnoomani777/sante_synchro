import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {





 
  profileForm: FormGroup;
  client: any;
  isEditing = false;
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(
    private crudService: CrudService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.profileForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: [''],
      age: [''],
      image: ['']
    });
  }

  ngOnInit(): void {
    this.loadClientProfile();
  }

  loadClientProfile(): void {
    const clientInfo = this.crudService.getClientInfo();
    if (clientInfo && clientInfo.id) {
      this.crudService.getClientById(clientInfo.id).subscribe(
        (client: any) => {
          this.client = client;
          this.profileForm.patchValue({
            nom: client.nom,
            prenom: client.prenom,
            email: client.email,
            telephone: client.telephone,
            age: client.age
          });
          this.previewUrl = client.image;
        },
        (error) => {
          console.error('Error loading profile:', error);
          this.toastr.error('Failed to load profile data');
        }
      );
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      
      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.loadClientProfile(); // Reset form if canceling edit
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const formData = new FormData();
      
      // Append all form values
      formData.append('nom', this.profileForm.get('nom')?.value);
      formData.append('prenom', this.profileForm.get('prenom')?.value);
      formData.append('email', this.profileForm.get('email')?.value);
      formData.append('telephone', this.profileForm.get('telephone')?.value);
      formData.append('age', this.profileForm.get('age')?.value);
      
      // Append the file if selected
      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }

      this.crudService.updateUserProfile(formData).subscribe(
        (response) => {
          this.toastr.success('Profile updated successfully');
          this.isEditing = false;
          this.loadClientProfile(); // Refresh the data
        },
        (error) => {
          console.error('Error updating profile:', error);
          this.toastr.error('Failed to update profile');
        }
      );
    }
  }
}


