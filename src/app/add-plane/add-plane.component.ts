import { Component } from '@angular/core';
import { PlaneService } from '../plane.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-plane',
  templateUrl: './add-plane.component.html',
  styleUrls: ['./add-plane.component.css']
})
export class AddPlaneComponent {
  name: string = '';
  manufacturer: string = '';
  capacity: number = 0;

  constructor(private planeService: PlaneService, private router: Router) {}

  addPlane(): void {
    const newPlane = {
      name: this.name,
      manufacturer: this.manufacturer,
      capacity: this.capacity
    };

    this.planeService.addPlane(newPlane).subscribe(() => {
      this.router.navigate(['/']); // Navigálj vissza a fő oldalra
    });
  }
}
