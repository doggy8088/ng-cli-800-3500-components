import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2965Component } from './page2965.component';

@NgModule({
  declarations: [Page2965Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2965Component }])],
  exports: [Page2965Component]
})
export class Page2965Module {}
