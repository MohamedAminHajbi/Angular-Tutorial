import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  name = "data";
  age = 23;
  imageURL = "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg";
  text = "";
  display = false;
  change(){
    this.age=20;
    this.name="Mohamed";
  }

}
