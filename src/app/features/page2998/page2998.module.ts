import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2998Component } from './page2998.component';

@NgModule({
  declarations: [Page2998Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2998Component }])],
  exports: [Page2998Component]
})
export class Page2998Module {}
