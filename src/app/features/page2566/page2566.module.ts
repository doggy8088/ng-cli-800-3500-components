import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2566Component } from './page2566.component';

@NgModule({
  declarations: [Page2566Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2566Component }])],
  exports: [Page2566Component]
})
export class Page2566Module {}
