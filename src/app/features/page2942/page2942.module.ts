import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2942Component } from './page2942.component';

@NgModule({
  declarations: [Page2942Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2942Component }])],
  exports: [Page2942Component]
})
export class Page2942Module {}
