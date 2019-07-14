import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3088Component } from './page3088.component';

@NgModule({
  declarations: [Page3088Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3088Component }])],
  exports: [Page3088Component]
})
export class Page3088Module {}
