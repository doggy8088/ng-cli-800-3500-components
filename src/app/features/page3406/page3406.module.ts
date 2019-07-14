import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3406Component } from './page3406.component';

@NgModule({
  declarations: [Page3406Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3406Component }])],
  exports: [Page3406Component]
})
export class Page3406Module {}
