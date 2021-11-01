import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { ApprovedRequestsComponent } from '../approved-requests/approved-requests.component';
import { DisapprovedRequestsComponent } from '../disapproved-requests/disapproved-requests.component';
import { PendingRequestsComponent } from '../pending-requests/pending-requests.component';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss']
})
export class LeaveRequestComponent implements OnInit {

  constructor(public router: Router, public generalservice: GeneralService) { }

  ngOnInit(): void {
  
    
  }

  highlightSelected(elementToBeHighlighted: 'approved' | 'pending' | 'disapproved'){
    const nodeList = (document.querySelectorAll('.textIconAndCount') as NodeListOf<HTMLElement>);
    nodeList.forEach(elem => elem.classList.remove('selected'));
    const targetElement = (document.querySelector(`.textIconAndCount.${elementToBeHighlighted}`) as HTMLElement);
    targetElement.classList.add('selected');
  }

  handleCurrentActivatedElement(event: any){
    if(event instanceof ApprovedRequestsComponent){
      setTimeout(() => {
        this.highlightSelected('approved');
      }, 0);
    }
    else if( event instanceof PendingRequestsComponent){
      setTimeout(() => {
        this.highlightSelected('pending');
      }, 0);
    }
    else if(event instanceof DisapprovedRequestsComponent){
      setTimeout(() => {
        this.highlightSelected('disapproved');
      }, 0);
    }

  }

  routeToSpecificPage(event: any){
    this.router.navigate(['dashboard',`${event as string}`])
  }

}
