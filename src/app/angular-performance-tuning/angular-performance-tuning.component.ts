import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-performance-tuning',
  templateUrl: './angular-performance-tuning.component.html',
  styleUrls: ['./angular-performance-tuning.component.css'],
  standalone:true
})
export class AngularPerformanceTuningComponent {
  header = 'Angular Performance Tuning';
  body = {
    steps: [
      {
        header:"Pre-Requisits::",
        data: "Install 'source-map-explorer' using '<code>npm i source-map-explorer</code>'",
      },
      {
        header:"Generate a report::",
        data:'Add "bundel-report": "ng build --configuration production --source-map && source-map-explorer dist/*.js" to "package.json" file <code>npm run bundel-report</code>'
      },
      {
        header:"For Monolithic::",
        data:'Make all components lazy load, You need to make components standalone. Bset way to do this, use this command: "ng generate @angular/core:standalone"'
      },
    ],
  };
}
