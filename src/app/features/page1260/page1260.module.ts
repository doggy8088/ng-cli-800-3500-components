import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1260Component } from './page1260.component';

@NgModule({
  declarations: [Page1260Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1260Component }])],
  exports: [Page1260Component]
})
export class Page1260Module {}
