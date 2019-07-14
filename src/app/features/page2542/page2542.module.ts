import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2542Component } from './page2542.component';

@NgModule({
  declarations: [Page2542Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2542Component }])],
  exports: [Page2542Component]
})
export class Page2542Module {}
