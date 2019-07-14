import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3311Component } from './page3311.component';

@NgModule({
  declarations: [Page3311Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3311Component }])],
  exports: [Page3311Component]
})
export class Page3311Module {}
