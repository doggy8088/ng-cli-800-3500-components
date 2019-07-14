import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3046Component } from './page3046.component';

@NgModule({
  declarations: [Page3046Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3046Component }])],
  exports: [Page3046Component]
})
export class Page3046Module {}
