import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    DialogModule,
    DropdownModule,
    InputSwitchModule,
    PasswordModule,
    RadioButtonModule,
    TableModule,
  ],
})
export class PrimeNgModule {}
