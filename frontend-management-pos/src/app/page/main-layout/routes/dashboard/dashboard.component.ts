import {Component, OnInit, signal} from '@angular/core';
import {CardModule} from "primeng/card";
import {UIChart} from "primeng/chart";

@Component({
    selector: 'app-dashboard',
    imports: [
        CardModule,
        UIChart
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
    ngOnInit(): void {
        this.initNetRevenueChart();

    }

    monthNetRevenueChartData: any;

    daysArr=():number[]=>{
        let arr:number[]=[];
        for (let i=1;i<=31;i++) arr.push(i);
        return arr
    }

    initNetRevenueChart() {
        this.monthNetRevenueChartData = {
            labels: this.daysArr(),
            datasets: [
                {
                    label: 'D',
                    data: [9, 2, 6, 4, 5,4,6,3,2,7,53,7]
                }
            ]
        };
    }
}
