import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1044Component } from './page1044.component';

@NgModule({
  declarations: [Page1044Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1044Component }])],
  exports: [Page1044Component]
})
export class Page1044Module {}
