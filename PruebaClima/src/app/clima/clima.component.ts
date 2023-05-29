import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServicioService } from '../servicio/servicio.service';
import { Modelo } from '../models/Modelo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import swal from 'sweetalert2';
//import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {
  id: any;
  clima: any;
  name: any;
  humedadvar: any;
  temp_min: any;
  temp_max: any;
  temp: any;
  viento: any;
  datos: any;
  img: any;
  climate: Modelo[] = [];

  miformulario: FormGroup = this.fb.group({

  });


  constructor(private servicio: ServicioService,
    private fb: FormBuilder,
    private ngxService: NgxUiLoaderService) { }
  ngOnInit(): void {

    //this.humedad(event);
  }
  async humedad(event: any) {
    console.log(event.target.value)
    await this.servicio.humedad(event.target.value)
      .subscribe(
        res => {
          this.clima = res;
          // console.log(this.clima);
          this.humedadvar = this.clima.main.humidity;
          this.name = this.clima.name;
          this.temp = this.clima.main.temp;
          this.temp_max = this.clima.main.temp_max;
          this.temp_min = this.clima.main.temp_min;
          this.viento = this.clima.wind.speed;
          this.id = this.clima.id;

          if (this.id == "4164138") {
            this.img = 'https://maps.openweathermap.org/maps/2.0/weather/HRD0/0001/0001/0001?opacity=1&fill_bound=true&appid=43d162ec823ebf417d07877dc163563e';
          } else if (this.id == "4167147") {
            this.img = "https://maps.openweathermap.org/maps/2.0/weather/HRD0/4/00000002/8?opacity=1&fill_bound=true&appid=43d162ec823ebf417d07877dc163563e";
          } else if (this.id == "5128638") {
            this.img = "https://maps.openweathermap.org/maps/2.0/weather/HRD0/4/4/7?opacity=1&fill_bound=true&appid=43d162ec823ebf417d07877dc163563e";
          } else {
            this.img = "";
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  async historiall() {
    console.log(this.id);
    await this.servicio.historiall(this.id)
      .subscribe(
        res => {
          this.datos = res;
          var numbers = new Array();
          for (let i = 121; i < 150; i = i + 1) {
            var length = numbers.push({
              dia: this.datos.result[i].day,
              humedad: this.datos.result[i].humidity.median,
              temp: this.datos.result[i].temp.median,
              viento: this.datos.result[i].wind.median
            });
          }
          this.climate = <Modelo[]>numbers;
        },
        err => {
          console.log(err);
        }
      )
  }
}

