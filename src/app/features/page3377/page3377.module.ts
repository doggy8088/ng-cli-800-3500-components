import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3377Component } from './page3377.component';

@NgModule({
  declarations: [Page3377Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3377Component }])],
  exports: [Page3377Component]
})
export class Page3377Module {}
