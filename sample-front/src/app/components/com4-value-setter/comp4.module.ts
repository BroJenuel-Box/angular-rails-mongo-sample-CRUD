import { NgModule } from '@angular/core';
import { Com4ValueSetterComponent } from './com4-value-setter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [Com4ValueSetterComponent],
  imports:[CommonModule, FormsModule],
  exports:[Com4ValueSetterComponent]
})
export class Com4Module { }
