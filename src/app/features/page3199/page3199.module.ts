import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3199Component } from './page3199.component';

@NgModule({
  declarations: [Page3199Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3199Component }])],
  exports: [Page3199Component]
})
export class Page3199Module {}
