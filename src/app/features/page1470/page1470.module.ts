import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1470Component } from './page1470.component';

@NgModule({
  declarations: [Page1470Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1470Component }])],
  exports: [Page1470Component]
})
export class Page1470Module {}
