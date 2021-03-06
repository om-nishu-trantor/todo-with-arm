class ApplicationController < ActionController::API

  before_action :valid_user
  rescue_from "ActionController::UnpermittedParameters", with: :bad_request
  rescue_from "Mongoid::Errors::DocumentNotFound", with: :invalid_creds

  private

  def valid_user
    user = User.find_by(auth_token: request.headers["auth-token"], id: params[:user_id])
  end

  def invalid_creds
    render json: { message: 'Invalid credentials' }, status: 401
  end

  def bad_request
    render json: { message: 'Unknown parameters' }, status: 400
  end

end
