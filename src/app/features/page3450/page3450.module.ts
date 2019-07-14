import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3450Component } from './page3450.component';

@NgModule({
  declarations: [Page3450Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3450Component }])],
  exports: [Page3450Component]
})
export class Page3450Module {}
