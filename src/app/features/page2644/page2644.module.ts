import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2644Component } from './page2644.component';

@NgModule({
  declarations: [Page2644Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2644Component }])],
  exports: [Page2644Component]
})
export class Page2644Module {}
