import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1705Component } from './page1705.component';

@NgModule({
  declarations: [Page1705Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1705Component }])],
  exports: [Page1705Component]
})
export class Page1705Module {}
