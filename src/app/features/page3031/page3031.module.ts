import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3031Component } from './page3031.component';

@NgModule({
  declarations: [Page3031Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3031Component }])],
  exports: [Page3031Component]
})
export class Page3031Module {}
