import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3037Component } from './page3037.component';

@NgModule({
  declarations: [Page3037Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3037Component }])],
  exports: [Page3037Component]
})
export class Page3037Module {}
