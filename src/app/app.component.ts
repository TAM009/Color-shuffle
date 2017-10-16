import { Submit } from './submit';
import { HackathonService } from './hackathon.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormsModule } from '@angular/forms';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent{
  
   public ticks=0;//Variable for activating timer

   public finish: Boolean = false;
   public continue: Boolean = true;

   timeOutFlag:boolean=false; // if true than game timeout else game running;
   timeOutStarted:boolean=false; //if false than game timer not yet started
   rand:number =1;// random function variable initialised.
   score:number=0;//initial score is zero.

   val:number=1;//a global variable to handle color change requests initialised at 1
   idbox:string='box1';
   model: Submit = new Submit();
   
   constructor(private hackathon: HackathonService){
     let shuffle = Observable.timer(500,500); // Call after 500 second.. Please set your time
     shuffle.subscribe(time =>{
       // this.GenerateRandFour();
       // console.log(this.rand);
       this.changeColour(this.val,this.idbox);
       // console.log(this.val,this.idbut);
     });
   }
   
// a funtion to start the game timer and flag end of game.
   StartTimeout(){
     setTimeout(() => {
       this.timeOutFlag=true;
     }, 90000);
   }

   // random number generator
   GenerateRandomBox() {
     this.rand = (Math.floor((Math.random( ) *10)+1)%4)+1;  
   }

   // color change function
   changeColour(boxValue:number,id:string){
     if(this.continue)
      {
          document.getElementById(id).style.background="#000";
          this.GenerateRandomBox();
          let boxId = this.rand.toString();
          //  console.log("elementId"+elementId);
          boxId = "box" +boxId;
          document.getElementById(boxId).style.background="#fff";
          this.val=this.rand;
          this.idbox=boxId; 
      } 
   }
   
   //function handling click event
   //for first iteration checks if the time out has started or not.
   BoxClick(boxValue:number,id:string){
     if(this.timeOutStarted===false)
     {
       this.StartTimeout(); //starts game timer on first function invocation;
       this.timeOutStarted=true;
      // console.log("timeoutStarted");
     }
     if(this.timeOutFlag===false)
     {
       if(boxValue==this.rand){
         this.score++;
         console.log("score"+this.score);
         this.changeColour(boxValue,id);
       }
       else
       {
         console.log("Oops!! Keep trying...")
       }
     }
     
     else
     {   
          this.continue = false;
          console.log(this.finish);
          this.finish = true;
         //console.log("finalscore"+this.score);
         //console.log('your 90 secs are over');
         //alert('90 seconds over! Press save to submit');
     }

   }
   // function handling submission of form
   onSubmit(name, email, id, city, git)
   {
    this.model.name = name;
    this.model.emailId = email;
    this.model.projectId = id;
    this.model.location = city;
    this.model.gitURL = git;
    console.log('Model', this.model);
    this.hackathon.create(name, email, id, city, git, this.score);
  }

}