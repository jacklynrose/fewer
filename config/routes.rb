Rails.application.routes.draw do
  resources :todos
  root to: "pages#home"
end
