import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3183Component } from './page3183.component';

@NgModule({
  declarations: [Page3183Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3183Component }])],
  exports: [Page3183Component]
})
export class Page3183Module {}
