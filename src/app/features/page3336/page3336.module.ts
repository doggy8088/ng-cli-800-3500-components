import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3336Component } from './page3336.component';

@NgModule({
  declarations: [Page3336Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3336Component }])],
  exports: [Page3336Component]
})
export class Page3336Module {}
