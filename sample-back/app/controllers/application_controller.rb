require 'encryptor' #ito ang bahala sa ating tokens
require 'token'

class ApplicationController < ActionController::API
     include Encryptor
     include ManageToken

     def create_token(user_id, username, user_type)
          # token format id.username.type.expiration_time_integer
          return generate_token(user_id, username, user_type)
     end

     def check_auth(user_type = 1)
          user_token = decrypt_token(request.headers['token'])
          if user_token
               account = User.find(user_token[:id])
               if account && account.type == user_type.to_i
                    if Time.now.to_i > user_token[:token_ex].to_i
                         render json: 'Token Expired, Login again', status: :ok
                    else
                         return true
                    end
               else
                    render json: 'Unauthorized', status: :unauthorized
               end
          else
               render json: 'Unauthorized', status: :unauthorized
          end
     end
end
