import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3297Component } from './page3297.component';

@NgModule({
  declarations: [Page3297Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3297Component }])],
  exports: [Page3297Component]
})
export class Page3297Module {}
