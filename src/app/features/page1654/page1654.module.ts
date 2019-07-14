import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1654Component } from './page1654.component';

@NgModule({
  declarations: [Page1654Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1654Component }])],
  exports: [Page1654Component]
})
export class Page1654Module {}
