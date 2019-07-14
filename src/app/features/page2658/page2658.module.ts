import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2658Component } from './page2658.component';

@NgModule({
  declarations: [Page2658Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2658Component }])],
  exports: [Page2658Component]
})
export class Page2658Module {}
