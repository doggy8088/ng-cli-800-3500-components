import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2410Component } from './page2410.component';

@NgModule({
  declarations: [Page2410Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2410Component }])],
  exports: [Page2410Component]
})
export class Page2410Module {}
