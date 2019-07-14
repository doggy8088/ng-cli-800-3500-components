import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3440Component } from './page3440.component';

@NgModule({
  declarations: [Page3440Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3440Component }])],
  exports: [Page3440Component]
})
export class Page3440Module {}
