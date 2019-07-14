import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3032Component } from './page3032.component';

@NgModule({
  declarations: [Page3032Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3032Component }])],
  exports: [Page3032Component]
})
export class Page3032Module {}
