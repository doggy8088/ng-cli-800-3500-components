import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3414Component } from './page3414.component';

@NgModule({
  declarations: [Page3414Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3414Component }])],
  exports: [Page3414Component]
})
export class Page3414Module {}
