import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3306Component } from './page3306.component';

@NgModule({
  declarations: [Page3306Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3306Component }])],
  exports: [Page3306Component]
})
export class Page3306Module {}
