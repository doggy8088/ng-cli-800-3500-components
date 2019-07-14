import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1372Component } from './page1372.component';

@NgModule({
  declarations: [Page1372Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1372Component }])],
  exports: [Page1372Component]
})
export class Page1372Module {}
