import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardForm } from '../card-form/card-form';
// reactive forms -  for handling complex form validation, user inputs, and robust data handling.
@Component({
  selector: 'app-checkout',
  imports: [CommonModule, ReactiveFormsModule, CardForm],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
  standalone: true,
})
export class Checkout {
  checkoutForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      paymentMethod: ['', [Validators.required]],
      // card payemnt details
      cardDetails: this.fb.group({
        cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
        cardName: ['', [Validators.required]],
        expiry: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
        cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      }),
    });
  }

  onSubmit() {
    console.log('object');
    if (this.checkoutForm.valid) {
      console.log('form values', this.checkoutForm.value);
    }
  }
}
