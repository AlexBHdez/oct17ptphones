import { Routes } from "@angular/router";

// import { PhoneDetailsComponent } from "./phone-details/phone-details.component";
import { PhonelistComponent } from "./pages/phonelist/phonelist.component";
import { PhoneDetailComponent } from './pages/phone-detail/phone-detail.component';


export const routes: Routes = [
  { path: "", component: PhonelistComponent }, 
  { path: "phones/:id", component: PhoneDetailComponent }, 
  { path: "**", redirectTo: "" }
];
