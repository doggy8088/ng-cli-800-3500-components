import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2108Component } from './page2108.component';

@NgModule({
  declarations: [Page2108Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2108Component }])],
  exports: [Page2108Component]
})
export class Page2108Module {}
