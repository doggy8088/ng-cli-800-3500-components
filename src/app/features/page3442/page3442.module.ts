import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3442Component } from './page3442.component';

@NgModule({
  declarations: [Page3442Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3442Component }])],
  exports: [Page3442Component]
})
export class Page3442Module {}
