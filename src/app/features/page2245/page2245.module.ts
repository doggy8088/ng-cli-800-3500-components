import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2245Component } from './page2245.component';

@NgModule({
  declarations: [Page2245Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2245Component }])],
  exports: [Page2245Component]
})
export class Page2245Module {}
