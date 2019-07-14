import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3312Component } from './page3312.component';

@NgModule({
  declarations: [Page3312Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3312Component }])],
  exports: [Page3312Component]
})
export class Page3312Module {}
