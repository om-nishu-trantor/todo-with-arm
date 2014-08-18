(1..5).each do |a|
  User.create(email: "email#{a}@testmail.com", password: 'Password1')
end
