Rails.application.routes.draw do
  resources :faq_sessions
  resources :sessions
  resources :users
  resources :faqs
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
