class AuthenticationController < ApplicationController

  # POST /user
  # POST /user.json
  def create
debugger
    @user = User.new(user_params)

    if @user.authenticate?
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user/1
  # DELETE /user/1.json
  def destroy
    @user = User.find(params[:id])
    @user.destroy

    head :no_content
  end

  private

  def user_params
    params.permit(:email, :password)
  end

end
