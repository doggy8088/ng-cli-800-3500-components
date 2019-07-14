import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1746Component } from './page1746.component';

@NgModule({
  declarations: [Page1746Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1746Component }])],
  exports: [Page1746Component]
})
export class Page1746Module {}
