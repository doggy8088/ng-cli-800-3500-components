import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3261Component } from './page3261.component';

@NgModule({
  declarations: [Page3261Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3261Component }])],
  exports: [Page3261Component]
})
export class Page3261Module {}
