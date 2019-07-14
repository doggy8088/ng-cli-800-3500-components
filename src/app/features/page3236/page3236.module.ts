import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3236Component } from './page3236.component';

@NgModule({
  declarations: [Page3236Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3236Component }])],
  exports: [Page3236Component]
})
export class Page3236Module {}
