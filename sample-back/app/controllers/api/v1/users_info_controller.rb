class Api::V1::UsersInfoController < ApplicationController
     before_action :set_user, only: [:set_user_information, :get_user_information
     ]
     #add_information
     def set_user_information
          if @user
               if @user.information.nil?
                    @user.set(:information => {})
               end

               if @user.update(:information => user_info_params.as_json)
                    render json: @user, status: :ok
               else
                    render json: @user.errors
               end
          else
               render json: {message: 'Account not Found'}
          end
     end

     def get_user_information
          if @user
               if @user.information.nil?
                    render json: {message: 'Account Information not set'}, status: :not_found
               else
                    render json: {information: @user.information, id: @user.id.to_s}, status: :ok
               end
          else
               render json: {messenger: 'Account not found'}, status: :not_found
          end
     end

     private
     def set_user
          @user = User.find(params[:id])
     end
     def user_info_params
          params.permit(:first_name, :last_name, :address, :phone)
     end
end
