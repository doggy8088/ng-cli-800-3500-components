import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2551Component } from './page2551.component';

@NgModule({
  declarations: [Page2551Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2551Component }])],
  exports: [Page2551Component]
})
export class Page2551Module {}
