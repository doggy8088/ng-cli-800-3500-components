import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2199Component } from './page2199.component';

@NgModule({
  declarations: [Page2199Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2199Component }])],
  exports: [Page2199Component]
})
export class Page2199Module {}
