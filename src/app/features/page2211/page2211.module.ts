import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2211Component } from './page2211.component';

@NgModule({
  declarations: [Page2211Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2211Component }])],
  exports: [Page2211Component]
})
export class Page2211Module {}
