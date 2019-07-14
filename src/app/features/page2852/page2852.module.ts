import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2852Component } from './page2852.component';

@NgModule({
  declarations: [Page2852Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2852Component }])],
  exports: [Page2852Component]
})
export class Page2852Module {}
