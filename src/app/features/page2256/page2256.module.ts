import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2256Component } from './page2256.component';

@NgModule({
  declarations: [Page2256Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2256Component }])],
  exports: [Page2256Component]
})
export class Page2256Module {}
