import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3147Component } from './page3147.component';

@NgModule({
  declarations: [Page3147Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3147Component }])],
  exports: [Page3147Component]
})
export class Page3147Module {}
