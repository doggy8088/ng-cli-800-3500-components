import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3015Component } from './page3015.component';

@NgModule({
  declarations: [Page3015Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3015Component }])],
  exports: [Page3015Component]
})
export class Page3015Module {}
