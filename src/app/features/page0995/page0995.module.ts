import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0995Component } from './page0995.component';

@NgModule({
  declarations: [Page0995Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0995Component }])],
  exports: [Page0995Component]
})
export class Page0995Module {}
