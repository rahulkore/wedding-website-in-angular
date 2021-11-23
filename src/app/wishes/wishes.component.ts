import { Component, OnInit } from '@angular/core';
import { Wishes } from '../shared/wishes';
import { Wish } from '../shared/wish';
import { WishesService } from '../services/wishes.service';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.css']
})
export class WishesComponent implements OnInit {

  wishes: Wish[] = [];
  flag : boolean = false;
  constructor(private wishService : WishesService) { 

  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(data => {
      this.wishes = data;
      this.flag = true;
      console.log(data.wishes);
    });
  }

}
