class User
  include Mongoid::Document
  field :email, type: String
  field :name, type: String
  field :password, type: String
  field :auth_token, type: String
  embeds_many :tasks

	validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }

end
