import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3381Component } from './page3381.component';

@NgModule({
  declarations: [Page3381Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3381Component }])],
  exports: [Page3381Component]
})
export class Page3381Module {}
