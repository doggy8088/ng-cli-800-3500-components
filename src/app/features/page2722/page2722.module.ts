import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2722Component } from './page2722.component';

@NgModule({
  declarations: [Page2722Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2722Component }])],
  exports: [Page2722Component]
})
export class Page2722Module {}
