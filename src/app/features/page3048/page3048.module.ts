import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3048Component } from './page3048.component';

@NgModule({
  declarations: [Page3048Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3048Component }])],
  exports: [Page3048Component]
})
export class Page3048Module {}
