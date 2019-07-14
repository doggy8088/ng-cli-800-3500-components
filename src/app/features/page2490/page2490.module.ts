import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2490Component } from './page2490.component';

@NgModule({
  declarations: [Page2490Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2490Component }])],
  exports: [Page2490Component]
})
export class Page2490Module {}
