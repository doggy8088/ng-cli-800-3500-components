import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2981Component } from './page2981.component';

@NgModule({
  declarations: [Page2981Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2981Component }])],
  exports: [Page2981Component]
})
export class Page2981Module {}
