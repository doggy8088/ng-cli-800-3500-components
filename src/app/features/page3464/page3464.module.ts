import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3464Component } from './page3464.component';

@NgModule({
  declarations: [Page3464Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3464Component }])],
  exports: [Page3464Component]
})
export class Page3464Module {}
