import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1832Component } from './page1832.component';

@NgModule({
  declarations: [Page1832Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1832Component }])],
  exports: [Page1832Component]
})
export class Page1832Module {}
