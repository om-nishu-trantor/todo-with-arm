class AuthenticationController < ApplicationController

  # POST /user
  # POST /user.json
  def index
    if user = User.authenticate(user_params)
      render json: user, only: [:auth_token, :email], status: :ok
    else
      render json: 'Invalid credentials', status: :unprocessable_entity
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
