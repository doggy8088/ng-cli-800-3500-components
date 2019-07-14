import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3258Component } from './page3258.component';

@NgModule({
  declarations: [Page3258Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3258Component }])],
  exports: [Page3258Component]
})
export class Page3258Module {}
