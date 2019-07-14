import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2308Component } from './page2308.component';

@NgModule({
  declarations: [Page2308Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2308Component }])],
  exports: [Page2308Component]
})
export class Page2308Module {}
