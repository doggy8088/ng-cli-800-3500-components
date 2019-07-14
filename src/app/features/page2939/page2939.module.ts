import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2939Component } from './page2939.component';

@NgModule({
  declarations: [Page2939Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2939Component }])],
  exports: [Page2939Component]
})
export class Page2939Module {}
