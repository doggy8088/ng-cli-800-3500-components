import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1073Component } from './page1073.component';

@NgModule({
  declarations: [Page1073Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1073Component }])],
  exports: [Page1073Component]
})
export class Page1073Module {}
