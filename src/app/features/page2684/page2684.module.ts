import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2684Component } from './page2684.component';

@NgModule({
  declarations: [Page2684Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2684Component }])],
  exports: [Page2684Component]
})
export class Page2684Module {}
