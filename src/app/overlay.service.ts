import {Injectable, Injector, Type} from '@angular/core';
import {Overlay, OverlayConfig, OverlayRef} from "@angular/cdk/overlay";
import {ComponentPortal, PortalInjector} from "@angular/cdk/portal";

import {OVERLAY_COMP} from './injectiontokens'
import {PanelComponent} from './panel/panel.component';

@Injectable({providedIn: 'root',})
export class OverlayService {

  constructor(
    private readonly overlay: Overlay,
    private readonly injector: Injector
  ) {
  }

  public openPanel(component: Type<any>) {

    const overlayRef = this.overlay.create(new OverlayConfig({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: this.overlay.scrollStrategies.noop()
    }));

    const injectorTokens = new WeakMap();
    injectorTokens.set(OverlayRef, overlayRef);
    injectorTokens.set(OVERLAY_COMP, component);

    const injector = new PortalInjector(this.injector, injectorTokens);
    const portal = new ComponentPortal(PanelComponent, null, injector);
    const panel = overlayRef.attach(portal);
  }
}
