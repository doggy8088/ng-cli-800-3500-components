import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3419Component } from './page3419.component';

@NgModule({
  declarations: [Page3419Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3419Component }])],
  exports: [Page3419Component]
})
export class Page3419Module {}
