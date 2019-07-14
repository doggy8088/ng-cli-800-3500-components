import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3194Component } from './page3194.component';

@NgModule({
  declarations: [Page3194Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3194Component }])],
  exports: [Page3194Component]
})
export class Page3194Module {}
