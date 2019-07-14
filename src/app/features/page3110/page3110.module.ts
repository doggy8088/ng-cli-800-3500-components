import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3110Component } from './page3110.component';

@NgModule({
  declarations: [Page3110Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3110Component }])],
  exports: [Page3110Component]
})
export class Page3110Module {}
