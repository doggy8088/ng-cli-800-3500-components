import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2862Component } from './page2862.component';

@NgModule({
  declarations: [Page2862Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2862Component }])],
  exports: [Page2862Component]
})
export class Page2862Module {}
