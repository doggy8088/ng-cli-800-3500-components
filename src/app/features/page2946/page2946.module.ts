import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2946Component } from './page2946.component';

@NgModule({
  declarations: [Page2946Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2946Component }])],
  exports: [Page2946Component]
})
export class Page2946Module {}
