import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2180Component } from './page2180.component';

@NgModule({
  declarations: [Page2180Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2180Component }])],
  exports: [Page2180Component]
})
export class Page2180Module {}
