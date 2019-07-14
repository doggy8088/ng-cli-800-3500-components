import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2680Component } from './page2680.component';

@NgModule({
  declarations: [Page2680Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2680Component }])],
  exports: [Page2680Component]
})
export class Page2680Module {}
