import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2195Component } from './page2195.component';

@NgModule({
  declarations: [Page2195Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2195Component }])],
  exports: [Page2195Component]
})
export class Page2195Module {}
