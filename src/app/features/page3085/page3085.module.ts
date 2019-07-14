import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3085Component } from './page3085.component';

@NgModule({
  declarations: [Page3085Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3085Component }])],
  exports: [Page3085Component]
})
export class Page3085Module {}
