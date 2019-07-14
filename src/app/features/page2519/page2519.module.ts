import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2519Component } from './page2519.component';

@NgModule({
  declarations: [Page2519Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2519Component }])],
  exports: [Page2519Component]
})
export class Page2519Module {}
