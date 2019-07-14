import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2261Component } from './page2261.component';

@NgModule({
  declarations: [Page2261Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2261Component }])],
  exports: [Page2261Component]
})
export class Page2261Module {}
