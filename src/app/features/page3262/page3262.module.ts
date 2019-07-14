import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3262Component } from './page3262.component';

@NgModule({
  declarations: [Page3262Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3262Component }])],
  exports: [Page3262Component]
})
export class Page3262Module {}
