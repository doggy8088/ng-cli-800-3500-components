import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2536Component } from './page2536.component';

@NgModule({
  declarations: [Page2536Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2536Component }])],
  exports: [Page2536Component]
})
export class Page2536Module {}
