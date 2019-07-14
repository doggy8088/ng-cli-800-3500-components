import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3066Component } from './page3066.component';

@NgModule({
  declarations: [Page3066Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3066Component }])],
  exports: [Page3066Component]
})
export class Page3066Module {}
