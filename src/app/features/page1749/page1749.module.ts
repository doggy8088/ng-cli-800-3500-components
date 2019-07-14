import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1749Component } from './page1749.component';

@NgModule({
  declarations: [Page1749Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1749Component }])],
  exports: [Page1749Component]
})
export class Page1749Module {}
