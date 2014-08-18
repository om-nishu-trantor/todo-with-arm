Rails.application.routes.draw do

  resources :authentication, only: [:create]
  match '/authentication/:email_id/:auth_id', to: 'authentication#destroy', via: :delete, constraints: { email_id: /[^\/]+/ }

end
