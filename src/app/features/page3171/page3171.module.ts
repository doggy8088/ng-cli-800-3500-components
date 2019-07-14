import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3171Component } from './page3171.component';

@NgModule({
  declarations: [Page3171Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3171Component }])],
  exports: [Page3171Component]
})
export class Page3171Module {}
