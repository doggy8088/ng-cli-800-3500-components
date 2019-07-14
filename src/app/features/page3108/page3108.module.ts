import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3108Component } from './page3108.component';

@NgModule({
  declarations: [Page3108Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3108Component }])],
  exports: [Page3108Component]
})
export class Page3108Module {}
