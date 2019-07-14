import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3283Component } from './page3283.component';

@NgModule({
  declarations: [Page3283Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3283Component }])],
  exports: [Page3283Component]
})
export class Page3283Module {}
