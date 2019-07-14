import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3134Component } from './page3134.component';

@NgModule({
  declarations: [Page3134Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3134Component }])],
  exports: [Page3134Component]
})
export class Page3134Module {}
