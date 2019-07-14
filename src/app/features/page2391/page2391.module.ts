import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2391Component } from './page2391.component';

@NgModule({
  declarations: [Page2391Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2391Component }])],
  exports: [Page2391Component]
})
export class Page2391Module {}
