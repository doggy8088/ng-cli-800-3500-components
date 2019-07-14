import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2344Component } from './page2344.component';

@NgModule({
  declarations: [Page2344Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2344Component }])],
  exports: [Page2344Component]
})
export class Page2344Module {}
