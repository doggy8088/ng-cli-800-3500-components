import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3439Component } from './page3439.component';

@NgModule({
  declarations: [Page3439Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3439Component }])],
  exports: [Page3439Component]
})
export class Page3439Module {}
