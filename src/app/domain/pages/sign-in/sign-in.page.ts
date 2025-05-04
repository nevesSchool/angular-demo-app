import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonGrid, IonRow, IonCol, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  standalone: true,
  imports: [IonRow, IonGrid, IonInput, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonItem, CommonModule, FormsModule]
})

export class SignInPage implements OnInit {

  constructor() {}

  ngOnInit() {}

}