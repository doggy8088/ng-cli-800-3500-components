import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3327Component } from './page3327.component';

@NgModule({
  declarations: [Page3327Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3327Component }])],
  exports: [Page3327Component]
})
export class Page3327Module {}
