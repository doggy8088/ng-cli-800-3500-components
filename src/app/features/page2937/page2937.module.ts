import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2937Component } from './page2937.component';

@NgModule({
  declarations: [Page2937Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2937Component }])],
  exports: [Page2937Component]
})
export class Page2937Module {}
