Rails.application.routes.draw do
  get '/chats/flagged', to: 'chats#flagged'
  get '/chats/trained', to: 'chats#trained'
  post '/chats/:id', to: 'chats#train'
  post '/chats/flagged/:id', to: 'chats#unflag'
  
  get '/tags', to: 'faqs#tags'
  get '/authors' , to: 'faqs#authors'
  
  post '/sessions/:id', to: 'sessions#add_faq'
  patch '/sessions/:id', to: 'sessions#add_faq_to_session'
  
  
  resources :chats
  resources :sessions
  resources :users
  resources :faqs
end
