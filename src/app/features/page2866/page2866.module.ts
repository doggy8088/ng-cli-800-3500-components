import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2866Component } from './page2866.component';

@NgModule({
  declarations: [Page2866Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2866Component }])],
  exports: [Page2866Component]
})
export class Page2866Module {}
