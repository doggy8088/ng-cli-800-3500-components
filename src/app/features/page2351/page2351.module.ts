import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2351Component } from './page2351.component';

@NgModule({
  declarations: [Page2351Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2351Component }])],
  exports: [Page2351Component]
})
export class Page2351Module {}
