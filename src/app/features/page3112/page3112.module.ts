import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3112Component } from './page3112.component';

@NgModule({
  declarations: [Page3112Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3112Component }])],
  exports: [Page3112Component]
})
export class Page3112Module {}
