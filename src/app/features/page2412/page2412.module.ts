import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2412Component } from './page2412.component';

@NgModule({
  declarations: [Page2412Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2412Component }])],
  exports: [Page2412Component]
})
export class Page2412Module {}
