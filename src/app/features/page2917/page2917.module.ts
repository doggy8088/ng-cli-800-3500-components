import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2917Component } from './page2917.component';

@NgModule({
  declarations: [Page2917Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2917Component }])],
  exports: [Page2917Component]
})
export class Page2917Module {}
