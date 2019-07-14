import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2182Component } from './page2182.component';

@NgModule({
  declarations: [Page2182Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2182Component }])],
  exports: [Page2182Component]
})
export class Page2182Module {}
