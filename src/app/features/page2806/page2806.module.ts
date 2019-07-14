import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2806Component } from './page2806.component';

@NgModule({
  declarations: [Page2806Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2806Component }])],
  exports: [Page2806Component]
})
export class Page2806Module {}
