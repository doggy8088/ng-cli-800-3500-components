import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1187Component } from './page1187.component';

@NgModule({
  declarations: [Page1187Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1187Component }])],
  exports: [Page1187Component]
})
export class Page1187Module {}
