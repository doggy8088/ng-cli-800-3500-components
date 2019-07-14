import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2875Component } from './page2875.component';

@NgModule({
  declarations: [Page2875Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2875Component }])],
  exports: [Page2875Component]
})
export class Page2875Module {}
