import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2090Component } from './page2090.component';

@NgModule({
  declarations: [Page2090Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2090Component }])],
  exports: [Page2090Component]
})
export class Page2090Module {}
