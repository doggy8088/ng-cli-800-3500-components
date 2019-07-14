import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3007Component } from './page3007.component';

@NgModule({
  declarations: [Page3007Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3007Component }])],
  exports: [Page3007Component]
})
export class Page3007Module {}
