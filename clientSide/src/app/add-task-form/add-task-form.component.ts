import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TasksUtilsServiceService } from "../tasks-utils-service.service";

@Component({
  selector: "app-add-task-form",
  templateUrl: "./add-task-form.component.html",
  styleUrls: ["./add-task-form.component.css"]
})
export class AddTaskFormComponent implements OnInit {
  isFormValid: boolean = true;
  private sub: any;
  @Input() id: number;
  @Output() backFromAddTask: EventEmitter<string> = new EventEmitter<string>();
  task: any = { UserID: "", TaskID: "", Title: "", Completed: false };

  constructor(
    private route: ActivatedRoute,
    private routerNav: Router,
    private utils: TasksUtilsServiceService
  ) {}

  cancelBtn() {
    this.backFromAddTask.emit();
  }

  customSubmit(isValid: boolean) {
    if (isValid) {
      this.task.UserID = this.id;
      //alert("ADD!\n" + JSON.stringify(this.task));
      this.isFormValid = true;
      this.utils.addTask(this.task);
      //this.routerNav.navigate(["/Tasks", this.task.UserID]);
      this.backFromAddTask.emit();
    } else {
      this.isFormValid = false;
    }
  }

  ngOnInit() {
    /*this.sub = this.route.params.subscribe(params => {
      this.task.UserID = params.userid;
      this.task.TaskID = params.taskid;
    });*/
  }
}