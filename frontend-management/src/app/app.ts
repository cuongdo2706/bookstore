import {Component, inject, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrimeNG} from "primeng/config";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
    private primeng = inject(PrimeNG);
    
    ngOnInit(): void {
        this.primeng.ripple.set(true);
        this.primeng.setTranslation({
            dayNames: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
            dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
            dayNamesMin: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
            monthNames: [
                'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
                'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
            ],
            monthNamesShort: [
                'Th1', 'Th2', 'Th3', 'Th4', 'Th5', 'Th6',
                'Th7', 'Th8', 'Th9', 'Th10', 'Th11', 'Th12'
            ],
            today: 'Hôm nay',
            clear: 'Xóa',
            dateFormat: 'dd/mm/yy',
            weekHeader: 'Tuần'
        });
    }
}
