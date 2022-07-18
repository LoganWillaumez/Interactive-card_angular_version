import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'technicalTest-angular';

  ngOnInit() {
    // this.loadScript(
    //   `https://maps.googleapis.com/maps/api/js?key=${envSecret.apiGoogle}`
    // ).then(() => {
    //   console.log('Success');
    // });
  }

  // loadScript(name: string) {
  //   return new Promise<void>((resolve, reject) => {
  //     let script = document.createElement('script');
  //     script.type = 'text/javascript';
  //     script.src = name;
  //     document.getElementsByTagName('head')[0].appendChild(script);
  //     console.log('Script Loaded');
  //     resolve();
  //   });
  // }
}
