import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2335Component } from './page2335.component';

@NgModule({
  declarations: [Page2335Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2335Component }])],
  exports: [Page2335Component]
})
export class Page2335Module {}
