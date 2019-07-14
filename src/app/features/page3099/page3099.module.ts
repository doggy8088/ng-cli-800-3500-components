import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3099Component } from './page3099.component';

@NgModule({
  declarations: [Page3099Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3099Component }])],
  exports: [Page3099Component]
})
export class Page3099Module {}
