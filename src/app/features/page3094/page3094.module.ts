import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3094Component } from './page3094.component';

@NgModule({
  declarations: [Page3094Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3094Component }])],
  exports: [Page3094Component]
})
export class Page3094Module {}
