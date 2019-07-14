import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1850Component } from './page1850.component';

@NgModule({
  declarations: [Page1850Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1850Component }])],
  exports: [Page1850Component]
})
export class Page1850Module {}
