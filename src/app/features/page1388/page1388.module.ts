import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1388Component } from './page1388.component';

@NgModule({
  declarations: [Page1388Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1388Component }])],
  exports: [Page1388Component]
})
export class Page1388Module {}
