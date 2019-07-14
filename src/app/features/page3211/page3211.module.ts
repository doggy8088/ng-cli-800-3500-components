import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3211Component } from './page3211.component';

@NgModule({
  declarations: [Page3211Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3211Component }])],
  exports: [Page3211Component]
})
export class Page3211Module {}
