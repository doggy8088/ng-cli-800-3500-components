import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3455Component } from './page3455.component';

@NgModule({
  declarations: [Page3455Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3455Component }])],
  exports: [Page3455Component]
})
export class Page3455Module {}
