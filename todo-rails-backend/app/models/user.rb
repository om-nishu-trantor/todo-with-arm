class User < MongoidBase
  field :email, type: String
  field :password, type: String
  field :auth_token, type: String
  embeds_many :tasks

	validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }, :uniqueness => true, :presence => true, :allow_blank => false
  validates :password, :presence => true, :allow_blank => false

  def self.authenticate(*args)
    user = User.find_by(args.first)
    user.update_attributes(auth_token: SecureRandom.hex(10)) unless user.auth_token
    user
  end

end
