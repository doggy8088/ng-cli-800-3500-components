import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3298Component } from './page3298.component';

@NgModule({
  declarations: [Page3298Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3298Component }])],
  exports: [Page3298Component]
})
export class Page3298Module {}
