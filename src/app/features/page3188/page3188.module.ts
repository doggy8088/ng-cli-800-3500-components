import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3188Component } from './page3188.component';

@NgModule({
  declarations: [Page3188Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3188Component }])],
  exports: [Page3188Component]
})
export class Page3188Module {}
