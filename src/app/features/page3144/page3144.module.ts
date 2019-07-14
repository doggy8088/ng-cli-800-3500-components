import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3144Component } from './page3144.component';

@NgModule({
  declarations: [Page3144Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3144Component }])],
  exports: [Page3144Component]
})
export class Page3144Module {}
