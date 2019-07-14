import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3063Component } from './page3063.component';

@NgModule({
  declarations: [Page3063Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3063Component }])],
  exports: [Page3063Component]
})
export class Page3063Module {}
