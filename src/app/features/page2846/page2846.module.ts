import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2846Component } from './page2846.component';

@NgModule({
  declarations: [Page2846Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2846Component }])],
  exports: [Page2846Component]
})
export class Page2846Module {}
