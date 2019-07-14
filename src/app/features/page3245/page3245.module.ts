import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3245Component } from './page3245.component';

@NgModule({
  declarations: [Page3245Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3245Component }])],
  exports: [Page3245Component]
})
export class Page3245Module {}
