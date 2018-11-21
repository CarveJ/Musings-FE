export const AddComment = (theComment,blogTitle) => ({
  type:'AddComment',
  api:true,
  theComment,
  blogTitle
})

export const GetBlogPosts = _ =>({
  type:'GetBlogPosts',
})
