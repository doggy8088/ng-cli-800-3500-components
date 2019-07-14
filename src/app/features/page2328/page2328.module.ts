import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2328Component } from './page2328.component';

@NgModule({
  declarations: [Page2328Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2328Component }])],
  exports: [Page2328Component]
})
export class Page2328Module {}
