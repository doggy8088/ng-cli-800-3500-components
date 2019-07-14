import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2223Component } from './page2223.component';

@NgModule({
  declarations: [Page2223Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2223Component }])],
  exports: [Page2223Component]
})
export class Page2223Module {}
