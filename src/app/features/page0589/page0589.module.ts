import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0589Component } from './page0589.component';

@NgModule({
  declarations: [Page0589Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0589Component }])],
  exports: [Page0589Component]
})
export class Page0589Module {}
