import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2055Component } from './page2055.component';

@NgModule({
  declarations: [Page2055Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2055Component }])],
  exports: [Page2055Component]
})
export class Page2055Module {}
