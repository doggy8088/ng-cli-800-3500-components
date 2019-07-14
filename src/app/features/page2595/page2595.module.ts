import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2595Component } from './page2595.component';

@NgModule({
  declarations: [Page2595Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2595Component }])],
  exports: [Page2595Component]
})
export class Page2595Module {}
