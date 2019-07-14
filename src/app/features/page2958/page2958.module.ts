import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2958Component } from './page2958.component';

@NgModule({
  declarations: [Page2958Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2958Component }])],
  exports: [Page2958Component]
})
export class Page2958Module {}
