import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3470Component } from './page3470.component';

@NgModule({
  declarations: [Page3470Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3470Component }])],
  exports: [Page3470Component]
})
export class Page3470Module {}
