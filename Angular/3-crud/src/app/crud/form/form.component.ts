import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/interfaces/users';
import { CountryService } from '../services/country.service';
import { UsersService } from '../services/users.service';
import { ValidatorsService } from '../services/validators.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  countries: string[] = [];
  user!: Users;
  @Output() reloadTable = new EventEmitter<boolean>();
  myForm: FormGroup = this.fb.group(
    {
      id: [],
      name: [, [Validators.required]],
      password: [, [Validators.required, Validators.minLength(6)]],
      password2: [, [Validators.required, Validators.minLength(6)]],
      email: [
        ,
        [Validators.required, Validators.pattern(this.validators.emailPattern)],
      ],
      check: [false],
      country: [, [Validators.required]],
      city: [, [Validators.required]],
    },
    {
      validators: [this.validators.confirmPassword('password', 'password2')],
    }
  );

  constructor(
    private country: CountryService,
    private fb: FormBuilder,
    private users: UsersService,
    private validators: ValidatorsService
  ) {}

  ngOnInit(): void {
    this.countries = this.country.countryList;
  }

  submit() {
    if (this.myForm.get('id')?.value == null) {
      this.user = this.myForm.value;
      this.users.registerUser(this.user).subscribe(() => {
        this.users.setReloadTable(true);
        this.myForm.reset();
      });
    } else {
      this.user = this.myForm.value;
      this.users.edit(this.user).subscribe(() => {
        this.users.setReloadTable(true);
        this.myForm.reset();
      });
    }
  }

  // TODO: Sustituir el window.location.reload()
}
