import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2127Component } from './page2127.component';

@NgModule({
  declarations: [Page2127Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2127Component }])],
  exports: [Page2127Component]
})
export class Page2127Module {}
