import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from '../../services/page.service';
import { Page } from '../../models/page.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.scss']
})
export class PageEditComponent implements OnInit {
  page: Page = {
    id: '',
    title: '',
    content: '',
    lastModified: new Date(),
    author: 'current-user'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pageService: PageService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageService.getPageById(id).subscribe(p => {
        if (p) this.page = { ...p };
      });
    }
  }

  save(): void {
    this.page.lastModified = new Date();
    this.pageService.updatePage(this.page);
    this.router.navigate(['/']);
  }
}
