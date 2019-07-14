import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2401Component } from './page2401.component';

@NgModule({
  declarations: [Page2401Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2401Component }])],
  exports: [Page2401Component]
})
export class Page2401Module {}
