import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1990Component } from './page1990.component';

@NgModule({
  declarations: [Page1990Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1990Component }])],
  exports: [Page1990Component]
})
export class Page1990Module {}
