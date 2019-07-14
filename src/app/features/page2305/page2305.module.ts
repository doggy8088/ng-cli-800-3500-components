import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2305Component } from './page2305.component';

@NgModule({
  declarations: [Page2305Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2305Component }])],
  exports: [Page2305Component]
})
export class Page2305Module {}
