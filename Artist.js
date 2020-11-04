class Artist {
    constructor(name, country, genre, lyrics) {
        this.aName = name;
        this.country = country;
        this.genre = genre;
        this.lyrics = lyrics
    }
     getName() {
        return this.aName;
    }
     getCountry() {
        return this.country;
    }
     getGenre() {
        return this.genre;
    }
     getPerform(){
        return this.lyrics;
    }

}

