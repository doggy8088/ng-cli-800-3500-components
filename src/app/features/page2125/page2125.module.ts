import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2125Component } from './page2125.component';

@NgModule({
  declarations: [Page2125Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2125Component }])],
  exports: [Page2125Component]
})
export class Page2125Module {}
