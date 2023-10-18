Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :homes, only: [:index, :show] do
      resources :reservations, only: [:create]
      resources :reviews, only: [:create, :update]
    end
    resources :reservations, only: [:destroy]
    resources :reviews, only: [:destroy]
  end

  get '*path', to: "static_pages#frontend_index"
end
