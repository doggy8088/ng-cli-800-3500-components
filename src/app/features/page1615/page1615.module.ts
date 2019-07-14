import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1615Component } from './page1615.component';

@NgModule({
  declarations: [Page1615Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1615Component }])],
  exports: [Page1615Component]
})
export class Page1615Module {}
