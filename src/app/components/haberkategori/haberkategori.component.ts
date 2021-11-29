import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Haber } from 'src/app/models/haber';
import { ServisService } from 'src/app/servis/servis.service';

@Component({
  selector: 'app-haberkategori',
  templateUrl: './haberkategori.component.html',
  styleUrls: ['./haberkategori.component.css']
})
export class HaberkategoriComponent implements OnInit {
  haberler: Haber[];

  constructor(private servis: ServisService, 
    private router: Router,
    private activeRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(p=>{
      this.servis.haberbykategori(p.kategori).subscribe((d:Haber[])=>{
        this.haberler=d;
      })
    })
  }

  haberDetay(id) {
    this.router.navigate(['d', id])
  }

}
