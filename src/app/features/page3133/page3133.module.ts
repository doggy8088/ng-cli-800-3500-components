import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3133Component } from './page3133.component';

@NgModule({
  declarations: [Page3133Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3133Component }])],
  exports: [Page3133Component]
})
export class Page3133Module {}
