import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3324Component } from './page3324.component';

@NgModule({
  declarations: [Page3324Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3324Component }])],
  exports: [Page3324Component]
})
export class Page3324Module {}
