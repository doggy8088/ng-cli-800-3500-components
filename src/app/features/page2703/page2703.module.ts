import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2703Component } from './page2703.component';

@NgModule({
  declarations: [Page2703Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2703Component }])],
  exports: [Page2703Component]
})
export class Page2703Module {}
