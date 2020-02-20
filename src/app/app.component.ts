import {Component, Inject} from '@angular/core';
import {OverlayService} from "./overlay.service"
import {HelloWorldComponent} from "./helloworld/helloworld.component";

@Component({
  selector: 'app-root',
  template: ``
})

export class AppComponent {

  constructor(
    @Inject(OverlayService) private overlayService: OverlayService
  ) {
    this.overlayService.openPanel(HelloWorldComponent);
  }
}
