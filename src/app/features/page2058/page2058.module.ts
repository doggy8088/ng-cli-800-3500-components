import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2058Component } from './page2058.component';

@NgModule({
  declarations: [Page2058Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2058Component }])],
  exports: [Page2058Component]
})
export class Page2058Module {}
