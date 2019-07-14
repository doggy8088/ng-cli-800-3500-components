import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2777Component } from './page2777.component';

@NgModule({
  declarations: [Page2777Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2777Component }])],
  exports: [Page2777Component]
})
export class Page2777Module {}
