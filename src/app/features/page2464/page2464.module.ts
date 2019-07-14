import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2464Component } from './page2464.component';

@NgModule({
  declarations: [Page2464Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2464Component }])],
  exports: [Page2464Component]
})
export class Page2464Module {}
