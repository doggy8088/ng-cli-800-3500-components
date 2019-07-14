import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3138Component } from './page3138.component';

@NgModule({
  declarations: [Page3138Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3138Component }])],
  exports: [Page3138Component]
})
export class Page3138Module {}
