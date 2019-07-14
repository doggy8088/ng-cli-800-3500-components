import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0990Component } from './page0990.component';

@NgModule({
  declarations: [Page0990Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0990Component }])],
  exports: [Page0990Component]
})
export class Page0990Module {}
