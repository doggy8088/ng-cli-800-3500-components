import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2929Component } from './page2929.component';

@NgModule({
  declarations: [Page2929Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2929Component }])],
  exports: [Page2929Component]
})
export class Page2929Module {}
