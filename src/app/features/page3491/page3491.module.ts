import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3491Component } from './page3491.component';

@NgModule({
  declarations: [Page3491Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3491Component }])],
  exports: [Page3491Component]
})
export class Page3491Module {}
