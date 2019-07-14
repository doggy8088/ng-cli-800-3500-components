import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3205Component } from './page3205.component';

@NgModule({
  declarations: [Page3205Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3205Component }])],
  exports: [Page3205Component]
})
export class Page3205Module {}
