import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3289Component } from './page3289.component';

@NgModule({
  declarations: [Page3289Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3289Component }])],
  exports: [Page3289Component]
})
export class Page3289Module {}
