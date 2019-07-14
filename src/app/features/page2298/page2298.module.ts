import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2298Component } from './page2298.component';

@NgModule({
  declarations: [Page2298Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2298Component }])],
  exports: [Page2298Component]
})
export class Page2298Module {}
