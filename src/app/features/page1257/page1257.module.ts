import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1257Component } from './page1257.component';

@NgModule({
  declarations: [Page1257Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1257Component }])],
  exports: [Page1257Component]
})
export class Page1257Module {}
