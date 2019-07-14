import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3291Component } from './page3291.component';

@NgModule({
  declarations: [Page3291Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3291Component }])],
  exports: [Page3291Component]
})
export class Page3291Module {}
