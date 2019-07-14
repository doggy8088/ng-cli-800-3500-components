import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2154Component } from './page2154.component';

@NgModule({
  declarations: [Page2154Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2154Component }])],
  exports: [Page2154Component]
})
export class Page2154Module {}
