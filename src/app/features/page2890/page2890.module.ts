import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2890Component } from './page2890.component';

@NgModule({
  declarations: [Page2890Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2890Component }])],
  exports: [Page2890Component]
})
export class Page2890Module {}
