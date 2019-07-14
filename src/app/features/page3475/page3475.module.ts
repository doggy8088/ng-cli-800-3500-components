import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3475Component } from './page3475.component';

@NgModule({
  declarations: [Page3475Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3475Component }])],
  exports: [Page3475Component]
})
export class Page3475Module {}
