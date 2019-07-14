import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2047Component } from './page2047.component';

@NgModule({
  declarations: [Page2047Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2047Component }])],
  exports: [Page2047Component]
})
export class Page2047Module {}
