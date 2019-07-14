import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3160Component } from './page3160.component';

@NgModule({
  declarations: [Page3160Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3160Component }])],
  exports: [Page3160Component]
})
export class Page3160Module {}
