import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3404Component } from './page3404.component';

@NgModule({
  declarations: [Page3404Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3404Component }])],
  exports: [Page3404Component]
})
export class Page3404Module {}
