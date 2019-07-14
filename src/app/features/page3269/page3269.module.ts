import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3269Component } from './page3269.component';

@NgModule({
  declarations: [Page3269Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3269Component }])],
  exports: [Page3269Component]
})
export class Page3269Module {}
