import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent implements OnInit {
  constructor(private dataService: DataService) {}

  dataset: {
    amount: string,
    donations: []
  };
  students = [];
  highlightedStats: {
    score: string;
    game: string;
    date: string;
    username: string;
  }[];
  ngOnInit(): void {
    this.dataService.fetchDonations().subscribe((res:{amount: string, donations: []}) => {
      this.dataset = res;
    });

    this.dataService.fetchStudents().subscribe((res: any[]) => {
      this.students = res;
    });
  }

  fetchStudentStats(username: string) {
    console.log(username)

    this.dataService.fetchStats(username).subscribe((res: any) => {
      const mappedResponse = res.map((item: any) => {
        return {
          username: item.username,
          score: item.score,
          date: this.formatDate(item.date as number),
          game: item.game,
        };
      });
      this.highlightedStats = mappedResponse;
    });
  }

  private formatDate(data: number) {
    var date = new Date(+data);
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  }
}
