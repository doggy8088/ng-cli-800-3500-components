import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3365Component } from './page3365.component';

@NgModule({
  declarations: [Page3365Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3365Component }])],
  exports: [Page3365Component]
})
export class Page3365Module {}
