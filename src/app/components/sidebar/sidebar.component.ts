import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public router: Router, public generalservice: GeneralService) { }

  ngOnInit(): void {
  }


  toggle_dropDown(event: Event){
    const listParent = (event.target as HTMLElement).closest('li');
    const ulElement = listParent?.querySelector('.customDropDown_menu');
    const caret_container = listParent?.querySelector('.caret_container');
    caret_container?.classList.contains('rotate') ? caret_container.classList.remove('rotate') : caret_container?.classList.add('rotate');
    ulElement?.classList.contains('show') ? ulElement.classList.remove('show') : ulElement?.classList.add('show');
  }


  loansAdvance() {
    this.router.navigate(['/dashboard/payroll/loans-advance'])
  }
}
