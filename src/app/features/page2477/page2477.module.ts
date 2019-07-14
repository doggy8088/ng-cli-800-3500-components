import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2477Component } from './page2477.component';

@NgModule({
  declarations: [Page2477Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2477Component }])],
  exports: [Page2477Component]
})
export class Page2477Module {}
