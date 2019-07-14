import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3022Component } from './page3022.component';

@NgModule({
  declarations: [Page3022Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3022Component }])],
  exports: [Page3022Component]
})
export class Page3022Module {}
