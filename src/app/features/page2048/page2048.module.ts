import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2048Component } from './page2048.component';

@NgModule({
  declarations: [Page2048Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2048Component }])],
  exports: [Page2048Component]
})
export class Page2048Module {}
