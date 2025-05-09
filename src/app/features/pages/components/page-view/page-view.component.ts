import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PageService } from '../../services/page.service';
import { Page } from '../../models/page.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-view',
  standalone: true,
  imports: [RouterModule, CommonModule], // Add RouterModule and CommonModule here

  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss']
})
export class PageViewComponent implements OnInit {
  page: Page | null = null;

  constructor(private route: ActivatedRoute, private pageService: PageService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '1'; // fallback to default
    this.pageService.getPageById(id).subscribe(p => this.page = p || null);
  }
}
