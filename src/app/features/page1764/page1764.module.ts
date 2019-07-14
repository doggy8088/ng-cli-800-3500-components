import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1764Component } from './page1764.component';

@NgModule({
  declarations: [Page1764Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1764Component }])],
  exports: [Page1764Component]
})
export class Page1764Module {}
