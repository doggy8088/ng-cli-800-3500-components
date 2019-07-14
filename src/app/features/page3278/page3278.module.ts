import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3278Component } from './page3278.component';

@NgModule({
  declarations: [Page3278Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3278Component }])],
  exports: [Page3278Component]
})
export class Page3278Module {}
