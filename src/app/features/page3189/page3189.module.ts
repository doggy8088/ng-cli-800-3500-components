import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3189Component } from './page3189.component';

@NgModule({
  declarations: [Page3189Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3189Component }])],
  exports: [Page3189Component]
})
export class Page3189Module {}
