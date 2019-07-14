import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2411Component } from './page2411.component';

@NgModule({
  declarations: [Page2411Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2411Component }])],
  exports: [Page2411Component]
})
export class Page2411Module {}
