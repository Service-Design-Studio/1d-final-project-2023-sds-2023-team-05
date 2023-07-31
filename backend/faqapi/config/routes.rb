Rails.application.routes.draw do
  get '/chats/flagged', to: 'chats#flagged'
  get '/chats/trained', to: 'chats#trained'
  post '/chats/:id', to: 'chats#train'
  
  get '/tags', to: 'faqs#tags'
  get '/authors' , to: 'faqs#authors'
  
  post '/sessions/:id', to: 'sessions#add_faq'
  
  resources :chats
  resources :sessions
  resources :users
  resources :faqs
end
