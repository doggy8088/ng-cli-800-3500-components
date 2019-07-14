import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2395Component } from './page2395.component';

@NgModule({
  declarations: [Page2395Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2395Component }])],
  exports: [Page2395Component]
})
export class Page2395Module {}
