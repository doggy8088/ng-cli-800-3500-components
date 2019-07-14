import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3177Component } from './page3177.component';

@NgModule({
  declarations: [Page3177Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3177Component }])],
  exports: [Page3177Component]
})
export class Page3177Module {}
