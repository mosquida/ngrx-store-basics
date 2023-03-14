import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './state/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counter = 0;

  // Inject Store with type
  // store: Store<{nameofReducer at appmodule:  {structure of object expected to get from state }>
  // see counter.state.ts
  constructor(private store: Store<{ counter: { counter: number } }>) {
    // Subscribing to state changes
    // name of store to select is the same what you register at app.module StoreModule
    this.store.select('counter').subscribe((state) => {
      this.counter = state.counter;
    });
  }

  // Dispatch actions
  // call names from counter.action.ts instances
  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
