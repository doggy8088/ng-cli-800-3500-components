import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1703Component } from './page1703.component';

@NgModule({
  declarations: [Page1703Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1703Component }])],
  exports: [Page1703Component]
})
export class Page1703Module {}
