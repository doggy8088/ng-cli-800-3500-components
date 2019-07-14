import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1719Component } from './page1719.component';

@NgModule({
  declarations: [Page1719Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1719Component }])],
  exports: [Page1719Component]
})
export class Page1719Module {}
