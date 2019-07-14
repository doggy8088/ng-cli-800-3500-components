import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1370Component } from './page1370.component';

@NgModule({
  declarations: [Page1370Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1370Component }])],
  exports: [Page1370Component]
})
export class Page1370Module {}
