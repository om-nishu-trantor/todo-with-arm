class User
  include Mongoid::Document

  field :email, type: String
  field :name, type: String
  field :password, type: String
  field :auth_token, type: String
  embeds_many :tasks

  include Mongoid::Timestamps

	validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }, :presence => true, :allow_blank => false
  validates :name, :presence => true, :allow_blank => false
  validates :password, :presence => true, :allow_blank => false

  def self.authenticate?
    if valid
    #   TODO add authentication logic for creating an auth_token if valid
    else
      false
    end
  end

end
