import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToggleComponent } from './toggle/toggle.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, ToggleComponent, NgIfComponent, NgForComponent, NgSwitchComponent],

  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ToggleComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent
  ]
})
export class UiModule { }
