import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2608Component } from './page2608.component';

@NgModule({
  declarations: [Page2608Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2608Component }])],
  exports: [Page2608Component]
})
export class Page2608Module {}
