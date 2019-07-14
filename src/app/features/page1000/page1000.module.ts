import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1000Component } from './page1000.component';

@NgModule({
  declarations: [Page1000Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1000Component }])],
  exports: [Page1000Component]
})
export class Page1000Module {}
