import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3159Component } from './page3159.component';

@NgModule({
  declarations: [Page3159Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3159Component }])],
  exports: [Page3159Component]
})
export class Page3159Module {}
