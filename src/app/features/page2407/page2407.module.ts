import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2407Component } from './page2407.component';

@NgModule({
  declarations: [Page2407Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2407Component }])],
  exports: [Page2407Component]
})
export class Page2407Module {}
