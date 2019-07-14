import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2071Component } from './page2071.component';

@NgModule({
  declarations: [Page2071Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2071Component }])],
  exports: [Page2071Component]
})
export class Page2071Module {}
