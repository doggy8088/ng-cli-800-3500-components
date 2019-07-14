import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3057Component } from './page3057.component';

@NgModule({
  declarations: [Page3057Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3057Component }])],
  exports: [Page3057Component]
})
export class Page3057Module {}
