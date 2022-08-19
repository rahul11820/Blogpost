Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  #home page will show all the blogs
  get "home" ,to: "blogs#index"
  #edit 
  put "blog/:title" ,to: "blogs#edit"

  #add
  post "blog" ,to: "blogs#post1"

  #dele
  delete "blog/:blogid", to: "blogs#del1"

  #get single blog
  get "blogs/:blogid", to:"blogs#singleblog"

  #for search
  get "search", to: "blogs#search"

  #for the user blog list
  get "user/:username", to: "blogs#userblogs"
end
