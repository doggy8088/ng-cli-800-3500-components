import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2100Component } from './page2100.component';

@NgModule({
  declarations: [Page2100Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2100Component }])],
  exports: [Page2100Component]
})
export class Page2100Module {}
