import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2332Component } from './page2332.component';

@NgModule({
  declarations: [Page2332Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2332Component }])],
  exports: [Page2332Component]
})
export class Page2332Module {}
