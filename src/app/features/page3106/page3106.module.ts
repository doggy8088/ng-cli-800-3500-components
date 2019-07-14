import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3106Component } from './page3106.component';

@NgModule({
  declarations: [Page3106Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3106Component }])],
  exports: [Page3106Component]
})
export class Page3106Module {}
