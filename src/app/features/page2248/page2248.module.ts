import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2248Component } from './page2248.component';

@NgModule({
  declarations: [Page2248Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2248Component }])],
  exports: [Page2248Component]
})
export class Page2248Module {}
