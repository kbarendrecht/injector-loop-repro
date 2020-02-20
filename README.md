# InjectorLoopRepro

This project has a memory leak. 

The problem resides around the injection. The weird thing is that when `hello-world.component`'s template does not contain an ngModel, it works fine.

I'm not sure what is at fault here, did i make a mistake somewhere, or is this a legit bug with either `angular/cdk` or `angular/core`.

---

### Structure
- `AppComponent` attaches a PanelComponent to a `cdk/overlay` and injects `HelloWorldComponent`.

- `PanelComponent` tries to render `HelloWorldComponent` inside a `ngComponentOutlet`.

---
### Reproduce
Step 1: Run `ng serve` and open the browser console

Step 2: Uncomment the `p` tag with `ngModel` binding

Step 3: Observe the `PanelComponent.createInjector()` being triggered continuously
