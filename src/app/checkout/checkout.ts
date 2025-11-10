import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardForm } from '../card-form/card-form';
import { Router, RouterModule } from '@angular/router';
import { UsersDetails } from '../services/user.service';
// reactive forms -  for handling complex form validation, user inputs, and robust data handling.
@Component({
  selector: 'app-checkout',
  imports: [CommonModule, ReactiveFormsModule, CardForm, RouterModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
  standalone: true,
})
export class Checkout {
  checkoutForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private usersDetails: UsersDetails) {
    this.checkoutForm = this.fb.group({
      name: ['Rekha', [Validators.required, Validators.minLength(3)]],
      address: ['Pune', [Validators.required]],
      email: ['rekha@gmail.com', [Validators.required, Validators.email]],
      paymentMethod: ['cod', [Validators.required]],
      // card payemnt details
      cardDetails: this.fb.group({
        cardNumber: ['1111222233334444', [Validators.required, Validators.pattern(/^\d{16}$/)]],
        cardName: ['Rekha', [Validators.required]],
        expiry: ['12/27', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
        cvv: ['123', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      }),
    });
  }
  isPlaceOrderDisabled(): boolean {
    const method = this.checkoutForm.get('paymentMethod')?.value;
    if (method === 'card') {
      return this.checkoutForm.invalid;
    }
    if (method === 'cod') {
      const basicValid =
        this.checkoutForm.get('name')?.valid &&
        this.checkoutForm.get('email')?.valid &&
        this.checkoutForm.get('address')?.valid;
      return !basicValid;
    }
    return true;
  }

  onSubmit() {
    console.log(this.checkoutForm.value);
    this.usersDetails.saveUserDetails(this.checkoutForm.value);
    this.router.navigate(['/review']);
  }
}
