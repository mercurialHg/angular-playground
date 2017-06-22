import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `

     
        <h1> {{title}} </h1>                  <!-- interpolation binding example -->
        <h1 bind-textContent = "title"> </h1> <!-- property binding example -->
         <!-- <img src="{{imageUrl}}">   -->

        <!-- Property binding: syntax -->
                  <!--
        <img [src]="imageUrl" />
        <img bind-src="imageUrl"/> 
                  -->
                  <br/>
        <!-- Class Binding -->
        <button class="btn btn-primary"  [class.active]="isActive"> Button </button>


        <!-- Style Binding -->
        <div class="jumbotron" [style.backgroundColor]=" isActive ? 'aquamarine': 'slategray'"> </div>


        <!-- Event Binding -->
        
        <button (click) = "onClick($event)"> Click Me! </button>
        <button on-click = "onClick($event)"> Click Me! </button>

        <!-- Bubbling --> 
        <div (click) = "onDivClick()"> 
          <button (click) = "onClick($event)"> Click Me! </button>
        </div>


        <h1> Two Way Binding </h1>
        
        <input type="text" [(ngModel)]="input_title"/> 
        <input type="text" [(ngModel)]="input_title"/> 
        <input type="button" value="clear" (click)="clear()">

     <!--   <h1> Test </h1>
        <i class="glyphicon" [class.glyphicon-star]="!starEmpty" [class.glyphicon-star-empty]="starEmpty" (click)='changeStar()'>
    --> 


        <app-course4 [isFavorite]="post.isFavorite"> </app-course4>
  `, 
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  //property binding / interpolation examples
  title = 'Angular App';
  imageUrl = "http://lorempixel.com/400/200";
  alternativeText = "Lorem Pixel Image";

  //class binding example
  isActive = false;

  //introducing event object
  //built into Angular
  onClick(param) {
    param.stopPropagation(); //stop bubbling
    console.log("Mouse event: ", param)
 
  }

  //bubbling
  onDivClick() {
    console.log("event bubbled up to the div")
  }


  //two way binding
  input_title = "Test title"

  clear() {
    this.input_title = null;
  }

  //two way binding = property binding + event binding in the same time

  //test
  starEmpty = true;
  changeStar():void {
    this.starEmpty = !this.starEmpty;
  }


  //course 4 

  post = {
    title: "Title",
    isFavorite: true,
  }
}
