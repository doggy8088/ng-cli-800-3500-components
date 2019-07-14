import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3019Component } from './page3019.component';

@NgModule({
  declarations: [Page3019Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3019Component }])],
  exports: [Page3019Component]
})
export class Page3019Module {}
