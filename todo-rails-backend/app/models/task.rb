class Task < MongoidBase
  field :title, type: String
  field :description, type: String
  field :complete_till, type: DateTime
  field :done, type: Boolean, default: false

  embedded_in :user

  validates :title, :presence => true, :allow_blank => false
  validates :description, :presence => true, :allow_blank => false

  def id
    self._id.to_s
  end
end
