import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './card-form.html',
  styleUrl: './card-form.css',
  standalone: true,
})
export class CardForm {
  @Input() cardDetailsForm: any;

  get cardNumber() {
    return this.cardDetailsForm.get('cardNumber');
  }

  get cardName() {
    return this.cardDetailsForm.get('cardName');
  }

  get expiry() {
    return this.cardDetailsForm.get('expiry');
  }

  get cvv() {
    return this.cardDetailsForm.get('cvv');
  }
}
