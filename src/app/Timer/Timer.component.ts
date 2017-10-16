/*import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
//import { SimpleTimer } from 'ng2-simple-timer';

@Component({
  selector: 'timer',
  templateUrl: `./Timer.component.html`,
  styleUrls: ['./Timer.component.css'],
})
export class TimerComponent{
    sub: Subscription;
    public count = 0;
    public change: Boolean = false;
    public finish: Boolean = true;
    public ticks = 0;
    public minutesDisplay:number = 0;
    public hoursDisplay:number = 0;
    public secondsDisplay:number = 0;
    //colors;
    
   //Logic for the service required to display timer while the game is running
   constructor() 
   {
        setTimeout(() => 
        {
         this.stopTimer();
        }, 90000);
   }
  
    ngOnInit()
    {
        this.startTimer();
    }
   
   startTimer() {
     const timer = Observable.timer(1, 1000);
     this.sub = timer.subscribe(
         t => {
               this.ticks = t;
               if ((this.ticks) <= 90)
               {
                  this.secondsDisplay = Math.round(this.getSeconds(this.ticks) / 2);
                  console.log(this.secondsDisplay);
                  this.minutesDisplay = this.getMinutes(this.ticks);
                  this.hoursDisplay = this.getHours(this.ticks);
             // tslint:disable-next-line:one-line
               } 
               else
               {
               
                  console.log("Game Over!!");
               
               }
         }
     );
   }
   
   private getSeconds(ticks: number) {
     return this.pad(ticks % 90);
   }
   
   private getMinutes(ticks: number) {
      return this.pad((Math.floor(ticks / 60)) % 60);
   }
   
   private getHours(ticks: number) {
     return this.pad(Math.floor((ticks / 60) / 60));
   }
   
   private pad(digit: any) {
     return digit <= 9 ? '0' + digit : digit;
   }

   private stopTimer()
   {
    this.sub.unsubscribe();
   }
   //Logic for timer service ends!!
}*/