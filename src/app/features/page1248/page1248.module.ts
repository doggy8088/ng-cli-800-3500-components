import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1248Component } from './page1248.component';

@NgModule({
  declarations: [Page1248Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1248Component }])],
  exports: [Page1248Component]
})
export class Page1248Module {}
