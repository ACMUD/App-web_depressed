import { Injectable } from '@angular/core';

@Injectable()

export class TopnewsService {

    private topnews: Topnews_card[] = [
        {
            titulo: "title",
            img: "url",
            descripcion: "description",
        },
        {
            titulo: "title",
            img: "url",
            descripcion: "description",
        },
        {
            titulo: "title",
            img: "url",
            descripcion: "description",
        }
    ]

    constructor() { }

    getTopnews() {
        return this.topnews;
    }

}

export interface Topnews_card {
    titulo: string;
    img: string;
    descripcion: string;
    //fecha
}