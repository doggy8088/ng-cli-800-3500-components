import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1902Component } from './page1902.component';

@NgModule({
  declarations: [Page1902Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1902Component }])],
  exports: [Page1902Component]
})
export class Page1902Module {}
