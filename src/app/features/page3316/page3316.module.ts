import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3316Component } from './page3316.component';

@NgModule({
  declarations: [Page3316Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3316Component }])],
  exports: [Page3316Component]
})
export class Page3316Module {}
