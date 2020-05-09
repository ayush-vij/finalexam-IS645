import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Final Exam - IS645';
  model: any = {};
  onSubmit() {
    
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }
}