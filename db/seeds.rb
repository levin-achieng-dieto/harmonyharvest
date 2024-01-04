Admin.destroy_all
Category.destroy_all
# Event.destroy_all
# Blog.destroy_all

puts "start seeding..."

admin1 = Admin.create(username: "levin", email: "levin@gmail.com", password: "123", password_confirmation: "123")
admin2 = Admin.create(username: "dieto", email: "dieto@gmail.com", password: "abc", password_confirmation: "abc")

puts "done seeding"
