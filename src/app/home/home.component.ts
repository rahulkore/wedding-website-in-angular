import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { delay } from 'rxjs';
import { WishesService } from '../services/wishes.service';
import { Wish } from '../shared/wish';
declare const FlipDown : any;
declare var Typewriter : any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  days!: number;
  hours!: number;
  minutes!: number;
  seconds!: number;
  countDownDate!: number;
  now! : number;
  timeleft! : number;
  dummy : Wish[] = [];
  flag : boolean = true;
  countDownOver : boolean = false;

  wishFeedback!: FormGroup;
  constructor(private fb : FormBuilder, private wishService : WishesService) {
    this.createForm();
   }


  ngOnInit(): void {
    this.countDownDate = new Date("Dec 28, 2021 12:30:00").getTime();
    var twoDaysFromNow = (this.countDownDate / 1000);
    new FlipDown(twoDaysFromNow, {
      theme: "dark",
    }).start()
    .ifEnded(() => {
      //console.log("The countdown has ended!");
      this.countDownOver = true;
    });
    // const target = document.querySelector(".tw");
    // console.log("Query selectore => ",  target);
    // new Typewriter(target, {
    //   loop: true,
    //   typeColor: 'blue'
    // })
    // .type('Getting Married On')
    //   .rest(500)
    //   .start();

    // setInterval(() =>{
    //   this.countDownDate = new Date("Dec 28, 2021 12:30:00").getTime();
    //   this.now = new Date().getTime();
    //   this.timeleft = this.countDownDate - this.now;
    //   this.days = Math.floor(this.timeleft / (1000 * 60 * 60 * 24));;
    //   this.hours = Math.floor((this.timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));;
    //   this.minutes = Math.floor((this.timeleft % (1000 * 60 * 60)) / (1000 * 60));
    //   this.seconds = Math.floor((this.timeleft % (1000 * 60)) / 1000);
    // },0);
  }


 
  createForm(){
    this.wishFeedback = this.fb.group({
      name : "",
      wish : ""
    });
  }
  onSubmit(){
    this.flag = false;
    console.log(this.flag);
    var max = Math.floor(Math.random()*5000);
    setTimeout(() => {
      if(this.wishFeedback.value){
        console.log(this.wishFeedback.value.name,this.wishFeedback.value.wish);
        this.wishService.addWishes(max+1,this.wishFeedback.value.name,this.wishFeedback.value.wish);
      }  
    },2000);
    setTimeout(() => {
      this.wishFeedback.reset({
        name:"",
        wish:""
      });
      this.flag = true;
    },3000);
  }

}
