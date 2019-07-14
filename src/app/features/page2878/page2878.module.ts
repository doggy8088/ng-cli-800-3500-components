import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2878Component } from './page2878.component';

@NgModule({
  declarations: [Page2878Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2878Component }])],
  exports: [Page2878Component]
})
export class Page2878Module {}
