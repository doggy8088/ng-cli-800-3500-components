import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3382Component } from './page3382.component';

@NgModule({
  declarations: [Page3382Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3382Component }])],
  exports: [Page3382Component]
})
export class Page3382Module {}
