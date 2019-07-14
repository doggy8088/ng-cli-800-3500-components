import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3067Component } from './page3067.component';

@NgModule({
  declarations: [Page3067Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3067Component }])],
  exports: [Page3067Component]
})
export class Page3067Module {}
