import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3077Component } from './page3077.component';

@NgModule({
  declarations: [Page3077Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3077Component }])],
  exports: [Page3077Component]
})
export class Page3077Module {}
