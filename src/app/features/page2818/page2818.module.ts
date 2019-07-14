import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2818Component } from './page2818.component';

@NgModule({
  declarations: [Page2818Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2818Component }])],
  exports: [Page2818Component]
})
export class Page2818Module {}
