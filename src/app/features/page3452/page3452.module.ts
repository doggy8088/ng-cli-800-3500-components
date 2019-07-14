import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3452Component } from './page3452.component';

@NgModule({
  declarations: [Page3452Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3452Component }])],
  exports: [Page3452Component]
})
export class Page3452Module {}
