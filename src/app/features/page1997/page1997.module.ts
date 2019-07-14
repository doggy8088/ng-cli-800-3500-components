import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1997Component } from './page1997.component';

@NgModule({
  declarations: [Page1997Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1997Component }])],
  exports: [Page1997Component]
})
export class Page1997Module {}
