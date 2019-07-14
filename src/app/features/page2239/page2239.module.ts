import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2239Component } from './page2239.component';

@NgModule({
  declarations: [Page2239Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2239Component }])],
  exports: [Page2239Component]
})
export class Page2239Module {}
