import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3445Component } from './page3445.component';

@NgModule({
  declarations: [Page3445Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3445Component }])],
  exports: [Page3445Component]
})
export class Page3445Module {}
