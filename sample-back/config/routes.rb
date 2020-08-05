Rails.application.routes.draw do
  # ung namespace api means folder, and namespace
    #ex.
      # localhost:3000/api/v1/get_users
  namespace :api do
    namespace :v1 do
      get 'get_users', action: :get_users, controller: :users
      post 'create_user', action: :create_user, controller: :users
      get 'show_user', action: :show_user, controller: :users
      put 'update_user', action: :update_user, controller: :users
      delete 'delete_user', action: :delete_user, controller: :users
      put 'set_user_info', action: :set_user_information, controller: :users_info
      get 'get_user_info', action: :get_user_information, controller: :users_info

      post 'login', action: :Login, controller: :login
      post 'check_auth', action: :check_auth, controller: :login
      post 'check_token', action: :check_tok, controller: :login
    end
  end
end
