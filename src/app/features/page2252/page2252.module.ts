import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2252Component } from './page2252.component';

@NgModule({
  declarations: [Page2252Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2252Component }])],
  exports: [Page2252Component]
})
export class Page2252Module {}
