import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2046Component } from './page2046.component';

@NgModule({
  declarations: [Page2046Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2046Component }])],
  exports: [Page2046Component]
})
export class Page2046Module {}
