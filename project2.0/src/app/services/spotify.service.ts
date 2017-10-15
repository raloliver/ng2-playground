import { Injectable } from "@angular/core"
import { Http } from "@angular/http"
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {
    private searchUrl: string

    constructor(private _http: Http) {

    }

    //aqui o spotify libera vários tipos de pesquisa, usaremos como default artistas
    searchMusic(string: string, type = 'artists') {
        this.searchUrl = `https://api.spotify.com/v1/search?query=${string}&offset=0&limit=20&type=${type}&market=US`
        return this._http.get(this.searchUrl)
            .map(res => res.json())

    }
}