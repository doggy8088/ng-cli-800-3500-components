import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3441Component } from './page3441.component';

@NgModule({
  declarations: [Page3441Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3441Component }])],
  exports: [Page3441Component]
})
export class Page3441Module {}
