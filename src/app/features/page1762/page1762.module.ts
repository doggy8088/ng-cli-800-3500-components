import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1762Component } from './page1762.component';

@NgModule({
  declarations: [Page1762Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1762Component }])],
  exports: [Page1762Component]
})
export class Page1762Module {}
