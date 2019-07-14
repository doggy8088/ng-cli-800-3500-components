import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3270Component } from './page3270.component';

@NgModule({
  declarations: [Page3270Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3270Component }])],
  exports: [Page3270Component]
})
export class Page3270Module {}
