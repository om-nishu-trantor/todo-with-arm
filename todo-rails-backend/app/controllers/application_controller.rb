class ApplicationController < ActionController::API

  before_action :valid_user
  rescue_from "ActionController::UnpermittedParameters", "Mongoid::Errors::DocumentNotFound", with: :invalid_creds

  private

  def valid_user
    user = User.find_by(auth_token: request.headers["auth_token"], id: params[:user_id])
  end

  def invalid_creds
    render json: { message: 'Invalid credentials' }, status: :not_found
  end

end
