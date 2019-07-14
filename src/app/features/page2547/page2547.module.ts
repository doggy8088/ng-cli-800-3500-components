import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2547Component } from './page2547.component';

@NgModule({
  declarations: [Page2547Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2547Component }])],
  exports: [Page2547Component]
})
export class Page2547Module {}
