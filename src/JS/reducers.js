import {ADD_MOVIE} from "./actionTypes"
const initialState = {
  moviesData:[
    {
      id: 1,
      title: "Her",
      rate: 4,
      description:
          "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
      posterUrl:
          "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_.jpg",
      trailer: "https://www.youtube.com/embed/6QRvTv_tpw0",
  },
  {
      id: 2,
      title: "The Lobster",
      rate: 3,
      description:
          "In a dystopian near future, single people, according to the laws of The City, are taken to The Hotel, where they are obliged to find a romantic partner in forty-five days or are transformed into beasts and sent off into The Woods.",
      posterUrl:
          "https://i.pinimg.com/originals/43/9b/19/439b192bedc27cfaa0ec1cc787db800d.jpg",
      trailer:"https://www.youtube.com/embed/vU29VfayDMw",
  },
  {
      id: 3,
      title: "The Pianist",
      rate: 5,
      description:
          "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
      posterUrl:
          "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      trailer:"https://www.youtube.com/embed/BFwGqLa_oAo",
      },
  {
      id: 4,
      title: "Avengers: Endgame",
      rate: 1,
      description:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      posterUrl:
          "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      trailer:"https://www.youtube.com/embed/TcMBFSGVi1c",
  }
  ],
}

const addReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MOVIE:
      return { ...state, moviesData: [...state.moviesData, payload] };
    default:
      return state;
  }
};
export default addReducers;
