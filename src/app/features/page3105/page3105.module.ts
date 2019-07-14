import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3105Component } from './page3105.component';

@NgModule({
  declarations: [Page3105Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3105Component }])],
  exports: [Page3105Component]
})
export class Page3105Module {}
