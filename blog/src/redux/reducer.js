const initialState = {
  blogPosts:{aRandomPost:
    { _id: '5be983dd9352db2084cb86c3',
    title: 'Little Dog',
    content: 'There was a cute dog',
    hashtags: '#awesome',
    comments: [],
    __v: 0 }
  },
  hashTags:{},
  pinnedBlogPosts:[]
}

const reducer =  (state = initialState ,action) => {
  switch(action.type) {
    case 'AddComment':
      const copy = ({
        ...state
      })
      copy.blogPost[action.blogTitle].comments.push(action.comment)
      return copy;
      default:
      return state
  }
}

export default reducer;
