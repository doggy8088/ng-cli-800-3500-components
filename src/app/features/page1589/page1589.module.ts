import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1589Component } from './page1589.component';

@NgModule({
  declarations: [Page1589Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1589Component }])],
  exports: [Page1589Component]
})
export class Page1589Module {}
