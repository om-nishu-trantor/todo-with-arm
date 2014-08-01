Rails.application.routes.draw do

  resources :authentication,
  only: [:create, :destroy],
  path_names: { create: 'authorize', destroy: 'deauthorize' }

end
