import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1240Component } from './page1240.component';

@NgModule({
  declarations: [Page1240Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1240Component }])],
  exports: [Page1240Component]
})
export class Page1240Module {}
