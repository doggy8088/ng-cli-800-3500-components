import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3326Component } from './page3326.component';

@NgModule({
  declarations: [Page3326Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3326Component }])],
  exports: [Page3326Component]
})
export class Page3326Module {}
