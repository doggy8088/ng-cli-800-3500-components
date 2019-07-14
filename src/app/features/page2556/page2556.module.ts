import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2556Component } from './page2556.component';

@NgModule({
  declarations: [Page2556Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2556Component }])],
  exports: [Page2556Component]
})
export class Page2556Module {}
