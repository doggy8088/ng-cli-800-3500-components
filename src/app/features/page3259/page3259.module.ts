import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3259Component } from './page3259.component';

@NgModule({
  declarations: [Page3259Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3259Component }])],
  exports: [Page3259Component]
})
export class Page3259Module {}
