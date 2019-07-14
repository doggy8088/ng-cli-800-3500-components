import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2655Component } from './page2655.component';

@NgModule({
  declarations: [Page2655Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2655Component }])],
  exports: [Page2655Component]
})
export class Page2655Module {}
