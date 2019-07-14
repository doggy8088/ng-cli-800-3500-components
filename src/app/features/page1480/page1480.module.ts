import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1480Component } from './page1480.component';

@NgModule({
  declarations: [Page1480Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1480Component }])],
  exports: [Page1480Component]
})
export class Page1480Module {}
