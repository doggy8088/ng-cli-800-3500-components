import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1055Component } from './page1055.component';

@NgModule({
  declarations: [Page1055Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1055Component }])],
  exports: [Page1055Component]
})
export class Page1055Module {}
