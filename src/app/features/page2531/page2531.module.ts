import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2531Component } from './page2531.component';

@NgModule({
  declarations: [Page2531Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2531Component }])],
  exports: [Page2531Component]
})
export class Page2531Module {}
