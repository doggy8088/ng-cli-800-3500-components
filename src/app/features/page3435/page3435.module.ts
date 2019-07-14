import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3435Component } from './page3435.component';

@NgModule({
  declarations: [Page3435Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3435Component }])],
  exports: [Page3435Component]
})
export class Page3435Module {}
