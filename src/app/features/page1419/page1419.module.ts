import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1419Component } from './page1419.component';

@NgModule({
  declarations: [Page1419Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1419Component }])],
  exports: [Page1419Component]
})
export class Page1419Module {}
