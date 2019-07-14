import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2375Component } from './page2375.component';

@NgModule({
  declarations: [Page2375Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2375Component }])],
  exports: [Page2375Component]
})
export class Page2375Module {}
