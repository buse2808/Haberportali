import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  Haber
} from 'src/app/models/haber';
import {
  ServisService
} from 'src/app/servis/servis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  haberler: Haber[];

  constructor(private servis: ServisService, private router: Router) {}

  ngOnInit(): void {
    this.haberliste();
  }

  haberliste() {
    this.servis.haberliste().subscribe((d: Haber[]) => {
      this.haberler = d
    })
  }

  haberDetay(id) {
    this.router.navigate(['d', id])
  }
}
