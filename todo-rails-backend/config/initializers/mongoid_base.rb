class MongoidBase
  include Mongoid::Document
  include Mongoid::Timestamps # To add updated_at and created_at timestamps
end