import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2504Component } from './page2504.component';

@NgModule({
  declarations: [Page2504Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2504Component }])],
  exports: [Page2504Component]
})
export class Page2504Module {}
