import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2752Component } from './page2752.component';

@NgModule({
  declarations: [Page2752Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2752Component }])],
  exports: [Page2752Component]
})
export class Page2752Module {}
