import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2580Component } from './page2580.component';

@NgModule({
  declarations: [Page2580Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2580Component }])],
  exports: [Page2580Component]
})
export class Page2580Module {}
