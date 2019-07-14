import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2599Component } from './page2599.component';

@NgModule({
  declarations: [Page2599Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2599Component }])],
  exports: [Page2599Component]
})
export class Page2599Module {}
