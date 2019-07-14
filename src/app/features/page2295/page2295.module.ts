import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2295Component } from './page2295.component';

@NgModule({
  declarations: [Page2295Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2295Component }])],
  exports: [Page2295Component]
})
export class Page2295Module {}
