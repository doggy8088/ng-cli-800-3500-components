import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2236Component } from './page2236.component';

@NgModule({
  declarations: [Page2236Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2236Component }])],
  exports: [Page2236Component]
})
export class Page2236Module {}
