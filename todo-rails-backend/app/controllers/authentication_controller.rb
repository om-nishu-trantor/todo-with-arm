class AuthenticationController < ApplicationController

  skip_before_action :valid_user
  # POST /user
  def create
    user = User.authenticate(user_params)
    render json: user, only: [:auth_token, :email, :_id], status: :ok
  end

  # DELETE /user/email_id/auth_id
  def destroy
    user = User.find_by(email: params[:email_id], auth_token: params[:auth_id])
    user.update_attributes(auth_token: nil)
    head status: :ok
  end

  private

  def user_params
    params.permit(:email, :password)
  end

end
