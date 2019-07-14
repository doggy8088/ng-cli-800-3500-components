import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2478Component } from './page2478.component';

@NgModule({
  declarations: [Page2478Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2478Component }])],
  exports: [Page2478Component]
})
export class Page2478Module {}
