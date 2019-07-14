import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2517Component } from './page2517.component';

@NgModule({
  declarations: [Page2517Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2517Component }])],
  exports: [Page2517Component]
})
export class Page2517Module {}
