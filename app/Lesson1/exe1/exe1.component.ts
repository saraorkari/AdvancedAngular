import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-exe1',
  templateUrl: './exe1.component.html',
  styleUrls: ['./exe1.component.css']
})
export class Exe1Component implements OnInit {

  constructor(private utils:UtilsService) { }

  async ngOnInit() {
    console.log(await this.utils.getUserData(1));
  }

}
