Rails.application.routes.draw do

  resources :authentication, only: [:create]
  match '/authentication/:email_id/:auth_id', to: 'authentication#destroy', via: :delete, constraints: { email_id: /[^\/]+/ }

  match 'users/:user_id/tasks/:id', to: "tasks#dummy", via: [:options]
  scope 'users/:user_id' do 
    resources :tasks
  end
end
