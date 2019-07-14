import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2034Component } from './page2034.component';

@NgModule({
  declarations: [Page2034Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2034Component }])],
  exports: [Page2034Component]
})
export class Page2034Module {}
