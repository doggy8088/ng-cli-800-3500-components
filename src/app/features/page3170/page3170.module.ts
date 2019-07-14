import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3170Component } from './page3170.component';

@NgModule({
  declarations: [Page3170Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3170Component }])],
  exports: [Page3170Component]
})
export class Page3170Module {}
