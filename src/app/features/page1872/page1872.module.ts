import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1872Component } from './page1872.component';

@NgModule({
  declarations: [Page1872Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1872Component }])],
  exports: [Page1872Component]
})
export class Page1872Module {}
