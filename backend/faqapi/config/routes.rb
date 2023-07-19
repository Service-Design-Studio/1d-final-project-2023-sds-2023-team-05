Rails.application.routes.draw do
  get 'chats/flagged', to: 'chats#flagged'
  resources :chats
  get '/tags', to: 'faqs#tags'
  get '/authors' , to: 'faqs#authors'
  resources :sessions
  resources :users
  resources :faqs
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
