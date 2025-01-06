import { Component, OnInit } from '@angular/core';
import { PlaneService } from './plane.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  planes: any[] = [];

  constructor(private planeService: PlaneService) { }

  ngOnInit(): void {
    this.planeService.getPlanes().subscribe(data => {
      this.planes = data;
    });
  }

  deletePlane(id: number): void {
    this.planeService.deletePlane(id).subscribe(() => {
      this.planes = this.planes.filter(plane => plane.id !== id);
    });
  }
}
