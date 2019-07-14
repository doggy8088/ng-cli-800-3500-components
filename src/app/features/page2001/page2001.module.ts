import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2001Component } from './page2001.component';

@NgModule({
  declarations: [Page2001Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2001Component }])],
  exports: [Page2001Component]
})
export class Page2001Module {}
