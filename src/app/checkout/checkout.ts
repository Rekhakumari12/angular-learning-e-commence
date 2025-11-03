import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// reactive forms -  for handling complex form validation, user inputs, and robust data handling.
@Component({
  selector: 'app-checkout',
  imports: [CommonModule, ReactiveFormsModule],
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
    });
  }

  onSubmit() {
    console.log('object');
    if (this.checkoutForm.valid) {
      console.log('form values', this.checkoutForm.value);
    }
  }
}
