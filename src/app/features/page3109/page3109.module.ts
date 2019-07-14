import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3109Component } from './page3109.component';

@NgModule({
  declarations: [Page3109Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3109Component }])],
  exports: [Page3109Component]
})
export class Page3109Module {}
