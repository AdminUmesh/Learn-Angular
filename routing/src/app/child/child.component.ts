import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() childMessage: string = '';

  // Output: Child ➡ Parent
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello Parent, this is Child 🚀');
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