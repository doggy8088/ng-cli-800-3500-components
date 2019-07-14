import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2513Component } from './page2513.component';

@NgModule({
  declarations: [Page2513Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2513Component }])],
  exports: [Page2513Component]
})
export class Page2513Module {}
