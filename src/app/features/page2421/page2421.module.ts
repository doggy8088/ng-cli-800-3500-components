import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2421Component } from './page2421.component';

@NgModule({
  declarations: [Page2421Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2421Component }])],
  exports: [Page2421Component]
})
export class Page2421Module {}
