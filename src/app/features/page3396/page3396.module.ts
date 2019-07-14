import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3396Component } from './page3396.component';

@NgModule({
  declarations: [Page3396Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3396Component }])],
  exports: [Page3396Component]
})
export class Page3396Module {}
