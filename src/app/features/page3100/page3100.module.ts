import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3100Component } from './page3100.component';

@NgModule({
  declarations: [Page3100Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3100Component }])],
  exports: [Page3100Component]
})
export class Page3100Module {}
