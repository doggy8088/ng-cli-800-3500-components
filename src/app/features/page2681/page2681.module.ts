import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2681Component } from './page2681.component';

@NgModule({
  declarations: [Page2681Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2681Component }])],
  exports: [Page2681Component]
})
export class Page2681Module {}
