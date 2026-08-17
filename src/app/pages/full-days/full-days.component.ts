import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { TourService } from '../../core/services/tour.service';
import { Tour } from '../../core/models/tour.model';
import { CardTourComponent } from '../../shared/components/card-tour/card-tour.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-full-days',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, CardTourComponent, SectionTitleComponent],
  templateUrl: './full-days.component.html',
  styleUrl: './full-days.component.css'
})
export class FullDaysComponent implements OnInit {
  tours: Tour[] = [];
  filteredTours: Tour[] = [];
  selectedLocation: string = 'todos';
  maxPrice: number = 200;

  constructor(private tourService: TourService) {}

  ngOnInit() {
    this.tourService.getFullDays().subscribe(data => {
      this.tours = data;
      this.filteredTours = data;
    });
  }

  filterTours() {
    this.filteredTours = this.tours.filter(tour => {
      const matchLocation = this.selectedLocation === 'todos' || 
        tour.location.toLowerCase().includes(this.selectedLocation.toLowerCase());
      const matchPrice = tour.price <= this.maxPrice;
      return matchLocation && matchPrice;
    });
  }

  onLocationChange(location: string) {
    this.selectedLocation = location;
    this.filterTours();
  }

  onPriceChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.maxPrice = Number(input.value);
    this.filterTours();
  }
}
