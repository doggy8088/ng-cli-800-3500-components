import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2323Component } from './page2323.component';

@NgModule({
  declarations: [Page2323Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2323Component }])],
  exports: [Page2323Component]
})
export class Page2323Module {}
