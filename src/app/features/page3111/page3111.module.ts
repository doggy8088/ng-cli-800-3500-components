import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3111Component } from './page3111.component';

@NgModule({
  declarations: [Page3111Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3111Component }])],
  exports: [Page3111Component]
})
export class Page3111Module {}
