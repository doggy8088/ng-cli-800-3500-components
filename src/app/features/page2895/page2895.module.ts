import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2895Component } from './page2895.component';

@NgModule({
  declarations: [Page2895Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2895Component }])],
  exports: [Page2895Component]
})
export class Page2895Module {}
