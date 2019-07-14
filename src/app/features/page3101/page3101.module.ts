import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3101Component } from './page3101.component';

@NgModule({
  declarations: [Page3101Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3101Component }])],
  exports: [Page3101Component]
})
export class Page3101Module {}
