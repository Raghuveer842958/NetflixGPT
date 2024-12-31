import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const recomendedMovieSlice = createSlice({
  name: "recomendedMovie",
  initialState: {
    recomendedMovies: [
      {
        "identifire": "horrorMovie",
        "movieName": "Horror Movie",
        "movieList": [
          "Tumbbad",
          "The Conjuring",
          "Raat",
          "It",
          "Bhool Bhulaiyaa",
          "The Exorcist",
          "13B",
          "A Nightmare on Elm Street"
        ]
      },
      {
        "identifire": "funnyMovie",
        "movieName": "Funny Movie",
        "movieList": [
          "Chupke Chupke",
          "The Hangover",
          "Golmaal (1979)",
          "Superbad",
          "Andaz Apna Apna",
          "21 Jump Street",
          "Hera Pheri",
          "Step Brothers"
        ]
      },
      {
        "identifire": "actionMovie",
        "movieName": "Action Movie",
        "movieList": [
          "Sholay",
          "Mad Max: Fury Road",
          "Baahubali: The Beginning",
          "John Wick",
          "Ghajini",
          "Die Hard",
          "Don (2006)",
          "The Dark Knight"
        ]
      },
      {
        "identifire": "romanticMovie",
        "movieName": "Romantic Movie",
        "movieList": [
          "Dilwale Dulhania Le Jayenge",
          "The Notebook",
          "Kuch Kuch Hota Hai",
          "Titanic",
          "Jab We Met",
          "La La Land",
          "Veer-Zaara",
          "Pride and Prejudice"
        ]
      },
      {
        "identifire": "sci_FiMovie",
        "movieName": "Sci-Fi Movie",
        "movieList": [
          "Robot (Enthiran)",
          "Inception",
          "PK",
          "The Matrix",
          "Koi... Mil Gaya",
          "Interstellar",
          "Ra.One",
          "Blade Runner 2049"
        ]
      },
      {
        "identifire": "adventureMovie",
        "movieName": "Adventure Movie",
        "movieList": [
          "Lagaan",
          "The Lord of the Rings: The Fellowship of the Ring",
          "Zindagi Na Milegi Dobara",
          "Pirates of the Caribbean: The Curse of the Black Pearl",
          "Dil Chahta Hai",
          "Indiana Jones: Raiders of the Lost Ark",
          "Barfi!",
          "Jurassic Park"
        ]
      },
      {
        "identifire": "dramaMovie",
        "movieName": "Drama Movie",
        "movieList": [
          "Dangal",
          "Forrest Gump",
          "Taare Zameen Par",
          "The Shawshank Redemption",
          "Black",
          "A Beautiful Mind",
          "Masaan",
          "The Pursuit of Happyness"
        ]
      },
      {
        "identifire": "animatedMovie",
        "movieName": "Animated Movie",
        "movieList": [
          "Toy Story",
          "Hanuman",
          "Frozen",
          "Chhota Bheem and the Curse of Damyaan",
          "Finding Nemo",
          "Bal Ganesh",
          "Shrek",
          "The Lion King"
        ]
      },
      {
        "identifire": "mysteryMovie",
        "movieName": "Mystery Movie",
        "movieList": [
          "Kahaani",
          "Gone Girl",
          "Drishyam",
          "The Girl with the Dragon Tattoo",
          "Talaash",
          "Shutter Island",
          "Special 26",
          "The Prestige"
        ]
      },
      {
        "identifire": "fantasyMovie",
        "movieName": "Fantasy Movie",
        "movieList": [
          "Baahubali 2: The Conclusion",
          "Harry Potter and the Sorcerer's Stone",
          "Magadheera",
          "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
          "Jodhaa Akbar",
          "The Wizard of Oz",
          "Paheli",
          "Alice in Wonderland"
        ]
      }
    ],
    selectedMovie: null,
    tmdbMovies: null,
    playingMovie: null,
  },
  reducers: {
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    removeSelectedMovie:(state)=>{
      state.selectedMovie=null;
    },
    setTmdbMoviesMovie: (state, action) => {
      state.tmdbMovies = action.payload;
    },
    removeTmdbMoviesMovie: (state) => {
      state.tmdbMovies = null;
    },
    addPlayingMovie: (state, action) => {
      state.playingMovie = action.payload;
    },
    removePlayingMMovie:(state)=>{
      state.playingMovie=null;
    },
  },
});

export default recomendedMovieSlice.reducer;
export const {
  setSelectedMovie,
  removeSelectedMovie,
  setTmdbMoviesMovie,
  removeTmdbMoviesMovie,
  addPlayingMovie,
  removePlayingMMovie
} = recomendedMovieSlice.actions;


const list2=
[
  {
    "identifire": "horrorMovie",
    "movieName": "Horror Movie",
    "movieList": [
      "The House on Haunted Hill (1959)",
      "Night of the Living Dead (1968)",
      "Carnival of Souls",
      "Nosferatu (1922)",
      "The Bat (1959)"
    ]
  },
  {
    "identifire": "funnyMovie",
    "movieName": "Funny Movie",
    "movieList": [
      "Charlie Chaplin: Modern Times",
      "Laurel and Hardy: The Flying Deuces",
      "Jerry Lewis: The Nutty Professor",
      "Duck Soup (1933)",
      "The Three Stooges: Brideless Groom"
    ]
  },
  {
    "identifire": "actionMovie",
    "movieName": "Action Movie",
    "movieList": [
      "Kung Fury",
      "Commando (1985)",
      "Enter the Ninja",
      "Bloodsport",
      "Samurai Cop"
    ]
  },
  {
    "identifire": "romanticMovie",
    "movieName": "Romantic Movie",
    "movieList": [
      "It Happened One Night (1934)",
      "Pride and Prejudice (2005)",
      "Breakfast at Tiffany's",
      "Sabrina (1954)",
      "Roman Holiday"
    ]
  },
  {
    "identifire": "sci_FiMovie",
    "movieName": "Sci-Fi Movie",
    "movieList": [
      "Metropolis (1927)",
      "The Day the Earth Stood Still (1951)",
      "Plan 9 from Outer Space",
      "Destination Moon",
      "Attack of the 50 Foot Woman"
    ]
  },
  {
    "identifire": "adventureMovie",
    "movieName": "Adventure Movie",
    "movieList": [
      "The Mark of Zorro (1920)",
      "Around the World in 80 Days (1956)",
      "Journey to the Center of the Earth",
      "Treasure Island (1950)",
      "Robin Hood (1938)"
    ]
  },
  {
    "identifire": "dramaMovie",
    "movieName": "Drama Movie",
    "movieList": [
      "12 Angry Men",
      "The Grapes of Wrath",
      "The Great Dictator",
      "Rebecca (1940)",
      "Casablanca"
    ]
  },
  {
    "identifire": "animatedMovie",
    "movieName": "Animated Movie",
    "movieList": [
      "The Adventures of Prince Achmed",
      "Gulliver's Travels (1939)",
      "Animal Farm (1954)",
      "Peter and the Wolf (1946)",
      "The Snow Queen (1957)"
    ]
  },
  {
    "identifire": "mysteryMovie",
    "movieName": "Mystery Movie",
    "movieList": [
      "Sherlock Holmes (1916)",
      "The Thin Man",
      "And Then There Were None",
      "Gaslight (1944)",
      "Charade (1963)"
    ]
  },
  {
    "identifire": "fantasyMovie",
    "movieName": "Fantasy Movie",
    "movieList": [
      "The Thief of Bagdad (1940)",
      "The Wizard of Oz",
      "Peter Pan (1924)",
      "The Secret Garden (1949)",
      "King Kong (1933)"
    ]
  }
]

const list3=[
  {
    "identifire": "horrorMovie",
    "movieName": "Horror Movie",
    "movieList": [
      "Tumbbad",
      "Mahal (1949)",
      "Raat",
      "13B",
      "Bhool Bhulaiyaa"
    ]
  },
  {
    "identifire": "funnyMovie",
    "movieName": "Funny Movie",
    "movieList": [
      "Chupke Chupke",
      "Golmaal (1979)",
      "Jaane Bhi Do Yaaro",
      "Andaz Apna Apna",
      "Hera Pheri"
    ]
  },
  {
    "identifire": "actionMovie",
    "movieName": "Action Movie",
    "movieList": [
      "Sholay",
      "Baahubali: The Beginning",
      "Rowdy Rathore",
      "Ghajini",
      "Don (2006)"
    ]
  },
  {
    "identifire": "romanticMovie",
    "movieName": "Romantic Movie",
    "movieList": [
      "Dilwale Dulhania Le Jayenge",
      "Kuch Kuch Hota Hai",
      "Jab We Met",
      "Veer-Zaara",
      "Hum Tum"
    ]
  },
  {
    "identifire": "sci_FiMovie",
    "movieName": "Sci-Fi Movie",
    "movieList": [
      "Robot (Enthiran)",
      "PK",
      "Ra.One",
      "Koi... Mil Gaya",
      "2.0"
    ]
  },
  {
    "identifire": "adventureMovie",
    "movieName": "Adventure Movie",
    "movieList": [
      "Lagaan",
      "Zindagi Na Milegi Dobara",
      "Dil Chahta Hai",
      "Barfi!",
      "Life of Pi"
    ]
  },
  {
    "identifire": "dramaMovie",
    "movieName": "Drama Movie",
    "movieList": [
      "Dangal",
      "Taare Zameen Par",
      "Black",
      "Masaan",
      "The Lunchbox"
    ]
  },
  {
    "identifire": "animatedMovie",
    "movieName": "Animated Movie",
    "movieList": [
      "Hanuman",
      "Chhota Bheem and the Curse of Damyaan",
      "Roadside Romeo",
      "Bal Ganesh",
      "Mighty Raju Rio Calling"
    ]
  },
  {
    "identifire": "mysteryMovie",
    "movieName": "Mystery Movie",
    "movieList": [
      "Kahaani",
      "Drishyam",
      "Talaash",
      "Special 26",
      "Ittefaq"
    ]
  },
  {
    "identifire": "fantasyMovie",
    "movieName": "Fantasy Movie",
    "movieList": [
      "Baahubali 2: The Conclusion",
      "Magadheera",
      "Jodhaa Akbar",
      "Paheli",
      "Aladdin (Indian version)"
    ]
  }
]



