import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3074Component } from './page3074.component';

@NgModule({
  declarations: [Page3074Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3074Component }])],
  exports: [Page3074Component]
})
export class Page3074Module {}
