import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2581Component } from './page2581.component';

@NgModule({
  declarations: [Page2581Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2581Component }])],
  exports: [Page2581Component]
})
export class Page2581Module {}
