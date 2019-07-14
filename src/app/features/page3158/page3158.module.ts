import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3158Component } from './page3158.component';

@NgModule({
  declarations: [Page3158Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3158Component }])],
  exports: [Page3158Component]
})
export class Page3158Module {}
