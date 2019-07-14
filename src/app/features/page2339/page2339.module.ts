import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2339Component } from './page2339.component';

@NgModule({
  declarations: [Page2339Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2339Component }])],
  exports: [Page2339Component]
})
export class Page2339Module {}
