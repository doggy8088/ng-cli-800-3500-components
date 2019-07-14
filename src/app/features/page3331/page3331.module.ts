import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3331Component } from './page3331.component';

@NgModule({
  declarations: [Page3331Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3331Component }])],
  exports: [Page3331Component]
})
export class Page3331Module {}
