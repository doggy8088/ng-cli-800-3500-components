import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1067Component } from './page1067.component';

@NgModule({
  declarations: [Page1067Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1067Component }])],
  exports: [Page1067Component]
})
export class Page1067Module {}
