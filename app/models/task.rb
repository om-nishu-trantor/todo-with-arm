class Task
  include Mongoid::Document
  field :title, type: String
  field :description, type: String
  embedded_in :user

end
