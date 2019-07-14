import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1006Component } from './page1006.component';

@NgModule({
  declarations: [Page1006Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1006Component }])],
  exports: [Page1006Component]
})
export class Page1006Module {}
