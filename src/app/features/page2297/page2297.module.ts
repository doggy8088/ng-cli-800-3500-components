import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2297Component } from './page2297.component';

@NgModule({
  declarations: [Page2297Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2297Component }])],
  exports: [Page2297Component]
})
export class Page2297Module {}
