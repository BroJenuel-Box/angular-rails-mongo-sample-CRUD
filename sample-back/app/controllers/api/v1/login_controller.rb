class Api::V1::LoginController < ApplicationController
     def Login
          user = User.find_by(:username => params[:username])
          if user
               if user.authenticate(params[:password])
                    token = self.create_token(user.id.to_s, user.username, user.type.nil? ? 2 : user.type.to_s)
                    user.set(:token => token)
                    render json: user.as_json({:except => [:password_digest]}), status: :ok
               else
                    render json: { message: "wrong password combination" }, status: :unprocessable_entity
               end
          else
               render json: { message: "Username not found" }, status: :unprocessable_entity
          end
     end

     def check_token
          self.check_auth(2)
     end


     private
     def login_params
          params.permit(:username,:password)
     end
end
