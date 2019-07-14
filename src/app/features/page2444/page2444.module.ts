import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2444Component } from './page2444.component';

@NgModule({
  declarations: [Page2444Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2444Component }])],
  exports: [Page2444Component]
})
export class Page2444Module {}
