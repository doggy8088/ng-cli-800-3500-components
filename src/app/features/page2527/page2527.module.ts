import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2527Component } from './page2527.component';

@NgModule({
  declarations: [Page2527Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2527Component }])],
  exports: [Page2527Component]
})
export class Page2527Module {}
