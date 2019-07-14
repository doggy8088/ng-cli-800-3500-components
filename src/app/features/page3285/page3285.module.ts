import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3285Component } from './page3285.component';

@NgModule({
  declarations: [Page3285Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3285Component }])],
  exports: [Page3285Component]
})
export class Page3285Module {}
