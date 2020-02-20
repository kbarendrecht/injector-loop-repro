import {Component} from '@angular/core';

@Component({
  selector: 'app-helloworld',
  template: `
    <!-- Works fine with this -->
    <p>No memory leak</p>

    <!-- Has a memory leak with this-->
    <!--<p name="helloworld" ngDefaultControl [(ngModel)]="text"></p>-->
  `,
})
export class HelloWorldComponent {
  public text = 'memoryleak!';
}
