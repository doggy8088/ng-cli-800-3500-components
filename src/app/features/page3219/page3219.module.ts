import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3219Component } from './page3219.component';

@NgModule({
  declarations: [Page3219Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3219Component }])],
  exports: [Page3219Component]
})
export class Page3219Module {}
