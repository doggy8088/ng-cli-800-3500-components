import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3323Component } from './page3323.component';

@NgModule({
  declarations: [Page3323Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3323Component }])],
  exports: [Page3323Component]
})
export class Page3323Module {}
