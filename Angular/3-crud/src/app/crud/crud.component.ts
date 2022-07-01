import { Component, ViewChild } from '@angular/core';
import { Users } from '../interfaces/users';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent {
  @ViewChild(FormComponent) formComp!: FormComponent;

  modify(user: Users) {
    this.formComp.myForm.patchValue(user);
  }
}
