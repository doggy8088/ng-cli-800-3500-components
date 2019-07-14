import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3403Component } from './page3403.component';

@NgModule({
  declarations: [Page3403Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3403Component }])],
  exports: [Page3403Component]
})
export class Page3403Module {}
