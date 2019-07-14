import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3125Component } from './page3125.component';

@NgModule({
  declarations: [Page3125Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3125Component }])],
  exports: [Page3125Component]
})
export class Page3125Module {}
