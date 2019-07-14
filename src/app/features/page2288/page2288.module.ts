import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2288Component } from './page2288.component';

@NgModule({
  declarations: [Page2288Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2288Component }])],
  exports: [Page2288Component]
})
export class Page2288Module {}
