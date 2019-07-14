import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3252Component } from './page3252.component';

@NgModule({
  declarations: [Page3252Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3252Component }])],
  exports: [Page3252Component]
})
export class Page3252Module {}
