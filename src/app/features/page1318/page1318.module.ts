import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1318Component } from './page1318.component';

@NgModule({
  declarations: [Page1318Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1318Component }])],
  exports: [Page1318Component]
})
export class Page1318Module {}
