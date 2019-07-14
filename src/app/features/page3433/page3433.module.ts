import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3433Component } from './page3433.component';

@NgModule({
  declarations: [Page3433Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3433Component }])],
  exports: [Page3433Component]
})
export class Page3433Module {}
