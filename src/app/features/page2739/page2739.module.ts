import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2739Component } from './page2739.component';

@NgModule({
  declarations: [Page2739Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2739Component }])],
  exports: [Page2739Component]
})
export class Page2739Module {}
