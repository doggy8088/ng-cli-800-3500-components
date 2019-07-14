import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2709Component } from './page2709.component';

@NgModule({
  declarations: [Page2709Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2709Component }])],
  exports: [Page2709Component]
})
export class Page2709Module {}
