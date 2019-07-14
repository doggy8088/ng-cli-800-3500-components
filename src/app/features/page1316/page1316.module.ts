import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1316Component } from './page1316.component';

@NgModule({
  declarations: [Page1316Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1316Component }])],
  exports: [Page1316Component]
})
export class Page1316Module {}
