import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2592Component } from './page2592.component';

@NgModule({
  declarations: [Page2592Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2592Component }])],
  exports: [Page2592Component]
})
export class Page2592Module {}
