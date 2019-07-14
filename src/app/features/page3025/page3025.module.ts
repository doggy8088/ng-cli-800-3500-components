import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3025Component } from './page3025.component';

@NgModule({
  declarations: [Page3025Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3025Component }])],
  exports: [Page3025Component]
})
export class Page3025Module {}
