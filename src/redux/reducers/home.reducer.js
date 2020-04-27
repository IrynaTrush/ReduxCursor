export const ADD_POST = "ADD_POST";

const initialState = {
  post: [
      {
        name: 'Anakin Skywalker', 
        photo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
        nickname: '@dart_vader',
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        image: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
        comments: 536,
        shares: 134,
        likes: 775
      },
      {
        name: 'Anakin Skywalker', 
        photo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
        nickname: '@dart_vader',
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        image: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
        comments: 155,
        shares: 99,
        likes: 1124
      },
      {
        name: 'Anakin Skywalker', 
        photo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
        nickname: '@dart_vader',
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        image: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
        comments: 321,
        shares: 105,
        likes: 789
      }
  ], 
  authors: [
      {
          name: 'Anakin Skywalker',
          photo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
          nickname: '@dart_vader',
          id: 0,
      },
      {
        name: 'Princess Leia',
        photo: 'https://www.bitchmedia.org/sites/default/files/styles/article_page_featured_image/public/princess-leia-1280jpg-189929_1280w.png?itok=HPp5-4yc',
        nickname: '@sweet_leia',
        id: 1,
    },
    {
        name: 'Chewbacca',
        photo: 'https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png/revision/latest?cb=20190830144754',
        nickname: '@Chewba_buba',
        id: 2,
    },
  ]
} 

export const homeReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            return {
                ...state,
                post: [...state.post, action.value]
            };
        }
        default:
            return state
    }
}

export default homeReducer;