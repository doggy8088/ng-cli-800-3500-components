import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3080Component } from './page3080.component';

@NgModule({
  declarations: [Page3080Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3080Component }])],
  exports: [Page3080Component]
})
export class Page3080Module {}
