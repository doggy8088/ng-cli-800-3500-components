import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3021Component } from './page3021.component';

@NgModule({
  declarations: [Page3021Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3021Component }])],
  exports: [Page3021Component]
})
export class Page3021Module {}
