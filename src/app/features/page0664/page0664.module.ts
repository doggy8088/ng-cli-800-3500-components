import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0664Component } from './page0664.component';

@NgModule({
  declarations: [Page0664Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0664Component }])],
  exports: [Page0664Component]
})
export class Page0664Module {}
