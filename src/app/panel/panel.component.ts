import {Component, Injector, Inject} from '@angular/core';
import {OVERLAY_COMP} from "../injectiontokens";

@Component({
  selector: 'app-panel',
  template: `
    <ng-container *ngComponentOutlet="component, injector: createInjector()"></ng-container>
  `,
})
export class PanelComponent {

  constructor(
    private readonly injector: Injector,
    @Inject(OVERLAY_COMP) public component
  ) {
  }

  public createInjector() {
    console.log('triggering createInjector');

    return Injector.create({
      providers: [
        {provide: OVERLAY_COMP, useValue: this.component},
      ],
      parent: this.injector
    });
  }

}
