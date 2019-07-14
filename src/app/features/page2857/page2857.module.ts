import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2857Component } from './page2857.component';

@NgModule({
  declarations: [Page2857Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2857Component }])],
  exports: [Page2857Component]
})
export class Page2857Module {}
