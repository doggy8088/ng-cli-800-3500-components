import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2558Component } from './page2558.component';

@NgModule({
  declarations: [Page2558Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2558Component }])],
  exports: [Page2558Component]
})
export class Page2558Module {}
