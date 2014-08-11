class AuthenticationController < ApplicationController

  # POST /user
  # POST /user.json
  def create
    user = User.new(user_params)

    if user.authenticated_and_saved?
      render json: user, except: [:_id, :password], status: :created # Status 201
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user/1
  # DELETE /user/1.json
  def destroy
    user = User.find(params[:id])
    user.destroy

    head :no_content
  end

  private

  def user_params
    params.permit(:email, :password)
  end

  def user_auth_params
    params.permit(:email, :auth_token)
  end

end
