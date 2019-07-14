import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3145Component } from './page3145.component';

@NgModule({
  declarations: [Page3145Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3145Component }])],
  exports: [Page3145Component]
})
export class Page3145Module {}
