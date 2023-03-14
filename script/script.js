const { createApp } = Vue

createApp({
  data() {
    return {

      menu: false,
      users: null,
      message: 'Hello Vue!',
      videocards: [
        {
            imgvideo:"https://i.ytimg.com/vi/IzGJCV_ejsA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDd0E-KrLF5tuCZ68-c6vhY6HA9Mg",
            title:"Titolo video",
            canale: "nome canale"

        },

        {
            imgvideo:"https://i.ytimg.com/vi/1BaMy3JFoeY/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhPIGUoZDAP&rs=AOn4CLDon1H68nNN-HDAS0OkIRUrKn1QOA",
            title:"Titolo video",
            canale: "nome canale"

        },
        {
            imgvideo:"https://i.ytimg.com/vi/tG7fk_DUz5g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnolFJ_5SQnJhJjFJ_CiZ_bfYnQA",
            title:"Titolo video",
            canale: "nome canale"

        },
        {
            imgvideo:"https://i.ytimg.com/vi/ZLDwUXloEuk/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAuADigIMCAAQARhlIFcoVTAP&rs=AOn4CLDUYpJYynMaxk6z6HhJCZb585yNaQ",
            title:"Titolo video",
            canale: "nome canale"

        },
        {
            imgvideo:"https://i.ytimg.com/vi/_wdfAp70TYI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAif1BVR-FpnVvL9wXwbKszsPzGVg",
            title:"Titolo video",
            canale: "nome canale"

        },
        {
            imgvideo:"https://i.ytimg.com/vi/tOtVkaGqtbQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDyEm4Jr1HKlhoD1t0Xq_fZMWSj3w",
            title:"Titolo video",
            canale: "nome canale"

        },
        {
            imgvideo:"https://i.ytimg.com/vi/FuhMIAyX_WM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDykpTZJNIyhZvqTa84zAtVBT9QLw",
            title:"Titolo video",
            canale: "nome canale"

        },

      ],

      shorts: [

        {
          img:"https://api.lorem.space/image/movie?w=150&h=220",
          title:"Titolo",
          visual:1234567
        },
        {
          img:"https://www.webtic.it/proxySecure/HandlerLocandinaEx.ashx?idcinema=5048&idevento=3925&i=jpg-m&t=211120221732",
          title:"Titolo",
          visual:1234567
        },
        {
          img:"https://i.ebayimg.com/images/g/pBEAAOSwVVtjal4t/s-l500.jpg",
          title:"Titolo",
          visual:1234567
        },
        {
          img:"https://resizing.flixster.com/SVNh_luQpjDCRN1MltdmK1x3Fek=/fit-in/180x240/v2/https://resizing.flixster.com/pbJEPbmzbJO7G6_fE7Sij-2rMuY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzYzMjg3YWE5LTMxOGEtNDYyYi1hY2I2LTI1MGZhOGU1MzBkNi5qcGc=",
          title:"Titolo",
          visual:1234567
        },
        {
          img:"https://i0.wp.com/moviesandmania.com/wp-content/uploads/2022/03/The-Prototype-movie-film-sci-fi-2022-review-reviews-poster.jpg?resize=300%2C386&ssl=1",
          title:"Titolo",
          visual:1234567
        },
        {
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5S_Da0YMDQxJnOex5EvSHlldBKqTiP9yh_w&usqp=CAU",
          title:"Titolo",
          visual:1234567
        },
        {
          img:"https://i.pinimg.com/236x/1c/5c/e4/1c5ce4fcaa0f5a0a5b783d68b73f06e4.jpg",
          title:"Titolo",
          visual:1234567
        }

      ],

      videos: [
        {
            imgvideo:"video-1.jpg",
            title:"Titolo video",
            canale: "nome canale"

        },
        {
            imgvideo:"video-1.jpg",
            title:"Titolo video",
            canale: "nome canale"

        },
        {
            imgvideo:"video-1.jpg",
            title:"Titolo video",
            canale: "nome canale"

        },
        {
            imgvideo:"video-1.jpg",
            title:"Titolo video",
            canale: "nome canale"

        },
      ]
    }
  },

  mounted() {

    axios.get(`https://dummyjson.com/users?limit=7`)
    .then((result) => {
      console.log(result.data.users);
      this.users = result.data.users  
      console.log("user",JSON.parse(JSON.stringify(this.users))
      ); 
    }).catch((error) => { console.log(error); });
    

  },
  methods: {
    hamburger() {

      this.menu = !this.menu;
      console.log(this.menu);
    }
    
  },
}).mount('#app')