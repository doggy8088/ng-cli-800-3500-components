import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3478Component } from './page3478.component';

@NgModule({
  declarations: [Page3478Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3478Component }])],
  exports: [Page3478Component]
})
export class Page3478Module {}
