import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3223Component } from './page3223.component';

@NgModule({
  declarations: [Page3223Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3223Component }])],
  exports: [Page3223Component]
})
export class Page3223Module {}
