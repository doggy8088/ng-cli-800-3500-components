import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3448Component } from './page3448.component';

@NgModule({
  declarations: [Page3448Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3448Component }])],
  exports: [Page3448Component]
})
export class Page3448Module {}
