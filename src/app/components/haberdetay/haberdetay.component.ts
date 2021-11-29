import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Haber } from 'src/app/models/haber';
import { ServisService } from 'src/app/servis/servis.service';

@Component({
  selector: 'app-haberdetay',
  templateUrl: './haberdetay.component.html',
  styleUrls: ['./haberdetay.component.css']
})
export class HaberdetayComponent implements OnInit {

  haber:Haber;

  constructor(private servis:ServisService, private activeRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(p=>{
      this.servis.haberbykey(p.id).subscribe((d:Haber)=>{this.haber=d[0];});
    })
  }

haberbykey(key){
}

}
