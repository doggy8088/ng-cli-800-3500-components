import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3024Component } from './page3024.component';

@NgModule({
  declarations: [Page3024Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3024Component }])],
  exports: [Page3024Component]
})
export class Page3024Module {}
