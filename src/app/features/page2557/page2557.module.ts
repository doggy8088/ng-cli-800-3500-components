import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2557Component } from './page2557.component';

@NgModule({
  declarations: [Page2557Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2557Component }])],
  exports: [Page2557Component]
})
export class Page2557Module {}
