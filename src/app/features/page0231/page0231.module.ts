import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0231Component } from './page0231.component';

@NgModule({
  declarations: [Page0231Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0231Component }])],
  exports: [Page0231Component]
})
export class Page0231Module {}
