import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3490Component } from './page3490.component';

@NgModule({
  declarations: [Page3490Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3490Component }])],
  exports: [Page3490Component]
})
export class Page3490Module {}
