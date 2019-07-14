import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1453Component } from './page1453.component';

@NgModule({
  declarations: [Page1453Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1453Component }])],
  exports: [Page1453Component]
})
export class Page1453Module {}
