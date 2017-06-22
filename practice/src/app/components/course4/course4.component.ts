import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course4',
  // templateUrl: './course4.component.html',
  template: `
    <h2> Course 4 </h2>

    <i
      class="glyphicon"
      [class.glyphicon-star-empty] = "!isFavorite"
      [class.glyphicon-star] = "isFavorite"
      (click) = "onClick()"> </i>
  `,
  inputs: ['isFavorite:is-favorite'], //if we do this, there is no need for @Input decorator
                          //refers to a property in component
                          //if we refactor the component, we need to update the property here
                          //in this case the @Input decorator method may be a better idea
                          //however, this is a good way to document the component
                          //choices... choices... choices...

                          // (update) you can add an alias through @Input('public alias')
                          // if the inputs in @Component have this syntax ['isFavorite: is-favorite'], they represent ['private property : public alias']
  styleUrls: ['./course4.component.sass']
})
export class Course4Component {

  @Input('is-favorite') isFavorite = false; //private property becomes Input property
                               //can be accessed from outside of the component

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

}
