import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0073Component } from './page0073.component';

@NgModule({
  declarations: [Page0073Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0073Component }])],
  exports: [Page0073Component]
})
export class Page0073Module {}
