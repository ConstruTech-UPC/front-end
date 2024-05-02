import { Injectable } from '@angular/core';
import {Material} from "../model/material.entity";
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class MaterialsService extends BaseService<Material> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/materials';
  }
}
