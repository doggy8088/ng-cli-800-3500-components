import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2984Component } from './page2984.component';

@NgModule({
  declarations: [Page2984Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2984Component }])],
  exports: [Page2984Component]
})
export class Page2984Module {}
