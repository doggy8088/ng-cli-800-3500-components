import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3371Component } from './page3371.component';

@NgModule({
  declarations: [Page3371Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3371Component }])],
  exports: [Page3371Component]
})
export class Page3371Module {}
