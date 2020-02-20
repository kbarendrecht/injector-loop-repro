import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {OverlayModule} from "@angular/cdk/overlay";

import {AppComponent} from './app.component';
import {PanelComponent} from './panel/panel.component';
import {HelloWorldComponent} from './helloworld/helloworld.component';
import {OverlayService} from "./overlay.service";

@NgModule({
  declarations: [AppComponent, PanelComponent, HelloWorldComponent],
  imports: [BrowserModule, FormsModule, OverlayModule],
  providers: [OverlayService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
