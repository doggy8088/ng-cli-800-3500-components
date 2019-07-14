import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3421Component } from './page3421.component';

@NgModule({
  declarations: [Page3421Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3421Component }])],
  exports: [Page3421Component]
})
export class Page3421Module {}
