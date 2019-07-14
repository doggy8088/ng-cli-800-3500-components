import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2923Component } from './page2923.component';

@NgModule({
  declarations: [Page2923Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2923Component }])],
  exports: [Page2923Component]
})
export class Page2923Module {}
