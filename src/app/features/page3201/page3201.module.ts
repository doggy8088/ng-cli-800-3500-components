import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3201Component } from './page3201.component';

@NgModule({
  declarations: [Page3201Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3201Component }])],
  exports: [Page3201Component]
})
export class Page3201Module {}
