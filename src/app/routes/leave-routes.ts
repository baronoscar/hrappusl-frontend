import { Routes } from "@angular/router";
import { ApprovedRequestsComponent } from "../components/approved-requests/approved-requests.component";
import { DisapprovedRequestsComponent } from "../components/disapproved-requests/disapproved-requests.component";
import { PendingRequestsComponent } from "../components/pending-requests/pending-requests.component";


export const leaveChildrenRoutes: Routes = [
    {
        path: 'approved', component: ApprovedRequestsComponent
      },
      {
       path: 'pending', component: PendingRequestsComponent
     },
     {
       path: 'disapproved', component: DisapprovedRequestsComponent
     }
]