import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0666Component } from './page0666.component';

@NgModule({
  declarations: [Page0666Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0666Component }])],
  exports: [Page0666Component]
})
export class Page0666Module {}
