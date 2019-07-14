import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1353Component } from './page1353.component';

@NgModule({
  declarations: [Page1353Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1353Component }])],
  exports: [Page1353Component]
})
export class Page1353Module {}
