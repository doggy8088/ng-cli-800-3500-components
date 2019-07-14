import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3006Component } from './page3006.component';

@NgModule({
  declarations: [Page3006Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3006Component }])],
  exports: [Page3006Component]
})
export class Page3006Module {}
