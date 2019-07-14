import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2345Component } from './page2345.component';

@NgModule({
  declarations: [Page2345Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2345Component }])],
  exports: [Page2345Component]
})
export class Page2345Module {}
