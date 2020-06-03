import { RouterModule, Routes } from '@angular/router';
import { CreateTestComponent } from "./create-test/create-test.component";
import { LiveExamComponent } from './live-exam/live-exam.component';
import { ViewAnswersheetComponent } from './view-answersheet/view-answersheet.component';
import { MenuComponent } from './menu/menu.component';
import { LogInComponent } from './log-in/log-in.component';
import { AvailableTestComponent } from './available-test/available-test.component';
import { ResultComponent } from './result/result.component';
import { FeesComponent } from './fees/fees.component';
import { ProfileComponent } from './profile/profile.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const arr:Routes=[
  {path:'',component:LogInComponent},
  {path:"changepassword",component:ChangepasswordComponent},
  {path:'menu',component:MenuComponent,children:[
    {path:'',component:DashboardComponent},
    {path:'available-test',component:AvailableTestComponent},

    {path:'result',component:ResultComponent},
    {path:'view_answersheet/:id',component:ViewAnswersheetComponent},
    {path:'fees',component:FeesComponent},
    {path:'profile',component:ProfileComponent},
    {path:'attendence',component:AttendenceComponent},
    {path:'announcement',component:AnnouncementComponent}
  ]},
  {path:'exam',component:CreateTestComponent},
  {path:'live_exam/:id',component:LiveExamComponent},
];

export const routing=RouterModule.forRoot(arr);
