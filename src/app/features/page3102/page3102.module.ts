import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3102Component } from './page3102.component';

@NgModule({
  declarations: [Page3102Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3102Component }])],
  exports: [Page3102Component]
})
export class Page3102Module {}
