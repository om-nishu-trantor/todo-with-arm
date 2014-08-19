class Task < MongoidBase
  field :title, type: String
  field :description, type: String
  field :complete_till, type: DateTime

  embedded_in :user

  validates :title, :presence => true, :allow_blank => false
  validates :description, :presence => true, :allow_blank => false

end
