import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3485Component } from './page3485.component';

@NgModule({
  declarations: [Page3485Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3485Component }])],
  exports: [Page3485Component]
})
export class Page3485Module {}
