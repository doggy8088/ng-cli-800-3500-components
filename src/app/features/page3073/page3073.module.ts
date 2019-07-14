import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3073Component } from './page3073.component';

@NgModule({
  declarations: [Page3073Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3073Component }])],
  exports: [Page3073Component]
})
export class Page3073Module {}
