import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2422Component } from './page2422.component';

@NgModule({
  declarations: [Page2422Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2422Component }])],
  exports: [Page2422Component]
})
export class Page2422Module {}
