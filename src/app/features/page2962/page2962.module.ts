import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2962Component } from './page2962.component';

@NgModule({
  declarations: [Page2962Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2962Component }])],
  exports: [Page2962Component]
})
export class Page2962Module {}
