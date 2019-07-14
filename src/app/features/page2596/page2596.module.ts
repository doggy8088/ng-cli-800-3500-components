import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2596Component } from './page2596.component';

@NgModule({
  declarations: [Page2596Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2596Component }])],
  exports: [Page2596Component]
})
export class Page2596Module {}
