import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1196Component } from './page1196.component';

@NgModule({
  declarations: [Page1196Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1196Component }])],
  exports: [Page1196Component]
})
export class Page1196Module {}
