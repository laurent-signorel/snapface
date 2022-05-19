import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  interval$!: Observable<string>;

  ngOnInit() {
    // this.interval$ = interval(1000).pipe(
    //   tap(value => this.logger(`${value}`)),
    //   filter(value => value % 3 === 0),
    //   map(value => value % 2 === 0 ?
    //     `Je suis ${value} et je suis pair` :
    //     `Je suis ${value} et je suis impair`
    //   )
    // );
  }

  logger(log:string):void{
    console.log(`Log : ${log}`)
  }
}
