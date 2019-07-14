import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3051Component } from './page3051.component';

@NgModule({
  declarations: [Page3051Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3051Component }])],
  exports: [Page3051Component]
})
export class Page3051Module {}
