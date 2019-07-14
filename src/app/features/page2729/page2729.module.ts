import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2729Component } from './page2729.component';

@NgModule({
  declarations: [Page2729Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2729Component }])],
  exports: [Page2729Component]
})
export class Page2729Module {}
