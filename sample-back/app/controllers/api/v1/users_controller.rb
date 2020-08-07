class Api::V1::UsersController < ApplicationController

     before_action :set_user, only: [:show_user, :update_user, :delete_user]
     before_action only: [:update_user, :delete_user] do
          check_auth(2)
     end

     # for getting all users
     def get_users
          # getting and setting limit and offset for pagination
          limit = params[:limit].nil? == false && params[:limit].empty? == false ? params[:limit].to_i : 5;
          page = params[:page].nil? == false && params[:page].empty? == false ? params[:page].to_i : 1;
          offset =  page == 1 ? 0 : (limit.to_i * page.to_i) - (limit.to_i);


          # using this is parang like sa sql
          query = {:username => /.*#{params[:username]}.*/, :email => /.*#{params[:email]}.*/}
          # the id should be separated kasi object id ang id sa mongodb
          if(params[:id])
               query[:id] = params[:id]
          end
          if(params[:phone])
               query['information.phone'] = params[:phone]
          end


          # get user gamit ang any_of, any_of is the best function to use when searching multiple items
          users = User.any_of(query).limit(limit).offset(offset)
          data = {:count => users.count, :limit => limit, :page => page}
          # pag nag fefetch ng user, we should always not return the password even if it is encrypted
          # yong model.as_json(:esxcept => []) is to choose some collumn that we dont want to show
          data[:data] = users.as_json(:except => [:password_digest])
          render json: data, status: :ok
     end

     # dor adding user
     def create_user
          # their are 2 ways to create a data User.new(params) and User.create!(params)
          #User.new(params) is better dahil its easy to manipulate
          user = User.new(user_params)
          user.type = 2; # every new user automatically type 2
          if user.save #save means it will check the validation sa user model then if validates pass returns true and add data to tables
               render json: { message: 'New Account Added', user: user.as_json(:except => [:password_digest]) }, status: :ok
          else
               # user.errors prints out yong anu yong error bakit error binalik niya
               render json: user.errors, status: :unprocessable_entity
          end
     end

     #for showing user
     def show_user
          # find basically finds the id. if true returns data if false return false(this is on the config we configure)
          if @user
               render json: @user.to_json(:except => [:password_digest]), status: :ok
          else
               render json: { message: 'No account Found' }, status: :unprocessable_entity
          end
     end

     # for updating
     def update_user
          if @user
               # updates whatever inside our params
               if @user.update(user_params)
                    render json: @user.as_json(:except => [:password_digest]), status: :ok
               else
                    render json: @user.errors, status: :unprocessable_entity
               end
          else
               render json: {message: "Account not Found"}, status: :unprocessable_entity
          end
     end

     #for deleting account
     def delete_user
          if @user.destroy
               render json: {message: 'Account Deleted!'}, status: :ok
          else
               render json: {message: 'Error, Account Not Deleted'}, status: :unprocessable_entity
          end
     end

     
     private
     def set_user
          @user = User.find(params[:id])
     end

     def user_params
          params.permit(:username, :password, :email, :type)
     end

end
