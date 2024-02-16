Admin.destroy_all

# Event.destroy_all
# Blog.destroy_all

puts "start seeding..."

admin1 = Admin.create(username: "levin", email: "levin@gmail.com", password: "123", password_confirmation: "123")
admin2 = Admin.create(username: "dieto", email: "dieto@gmail.com", password: "abc", password_confirmation: "abc")

donation1 = Donation.create(name: "Lennox", phone: "0114649754", location: "Ruiru", delivery: "I will bring")
donation2 = Donation.create(name: "Odero", phone: "0729649754", location: "Rolex", delivery: "Come pick")

puts "done seeding"


