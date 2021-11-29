import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Haber } from 'src/app/models/haber';
import { ServisService } from 'src/app/servis/servis.service';

@Component({
  selector: 'app-yoneticihaber',
  templateUrl: './yoneticihaber.component.html',
  styleUrls: ['./yoneticihaber.component.css']
})
export class YoneticihaberComponent implements OnInit {

  haberler: Haber;

  constructor(private servis: ServisService, private router: Router) {}

  ngOnInit(): void {
    this.haberliste();
  }

  haberliste() {
    this.servis.haberliste().subscribe((d: Haber) => {
      this.haberler = d;
    })
  }
  haberduzenle(k: Haber) {
    this.router.navigate(['../yoneticihaberislemleri', k.key])
  }
  habersil(id: string) {
    this.servis.habersil(id).subscribe(d => {
      console.log(d);
      this.haberliste();
    })
  }
  kategoribykey(k){
    this.servis.kategoribykey(k).subscribe((d)=>{return d})
  }

}
