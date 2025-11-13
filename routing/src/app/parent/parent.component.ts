import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  parentMessage = 'Hello from Parent 👋';
  childMessage = '';

  receiveMessage(event: string) {
    this.childMessage = event;
  }
}


//🔹 1. When To Use What?

//Use @Input() when the parent needs to pass data to the child.
//Example: Parent sends a token, username, or settings to child.

//Use @Output() when the child needs to notify parent of something.
//Example: Child emits an event when a button is clicked, a form is submitted, or a counter increases.

//🔹 2. Analogy

//@Input() = parent gives something to child (like giving pocket money ).

//@Output() = child tells parent something (like "I need more money!" ).

//=> @input or output always declare in child