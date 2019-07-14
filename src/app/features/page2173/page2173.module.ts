import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2173Component } from './page2173.component';

@NgModule({
  declarations: [Page2173Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2173Component }])],
  exports: [Page2173Component]
})
export class Page2173Module {}
