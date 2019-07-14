import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1716Component } from './page1716.component';

@NgModule({
  declarations: [Page1716Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1716Component }])],
  exports: [Page1716Component]
})
export class Page1716Module {}
