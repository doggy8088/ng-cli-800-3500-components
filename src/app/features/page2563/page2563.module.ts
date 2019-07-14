import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2563Component } from './page2563.component';

@NgModule({
  declarations: [Page2563Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2563Component }])],
  exports: [Page2563Component]
})
export class Page2563Module {}
