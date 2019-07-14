import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3039Component } from './page3039.component';

@NgModule({
  declarations: [Page3039Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3039Component }])],
  exports: [Page3039Component]
})
export class Page3039Module {}
