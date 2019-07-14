import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1324Component } from './page1324.component';

@NgModule({
  declarations: [Page1324Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1324Component }])],
  exports: [Page1324Component]
})
export class Page1324Module {}
