import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2829Component } from './page2829.component';

@NgModule({
  declarations: [Page2829Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2829Component }])],
  exports: [Page2829Component]
})
export class Page2829Module {}
