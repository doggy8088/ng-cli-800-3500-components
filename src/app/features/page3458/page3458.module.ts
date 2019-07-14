import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3458Component } from './page3458.component';

@NgModule({
  declarations: [Page3458Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3458Component }])],
  exports: [Page3458Component]
})
export class Page3458Module {}
