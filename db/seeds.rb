Admin.destroy_all
Donation.destroy_all
# Event.destroy_all
# Blog.destroy_all

puts "start seeding..."

admin1 = Admin.create(username: "levin", email: "levin@gmail.com", password: "123", password_confirmation: "123")
admin2 = Admin.create(username: "dieto", email: "dieto@gmail.com", password: "abc", password_confirmation: "abc")

donation1 = Donation.create(name: "Wicky", phone: "0743964412", location: "Juja", delivery: "i will bring")
donation2 = Donation.create(name: "Odero", phone: "0700225567", location: "Kimbo", delivery: "come pick")

puts "done seeding"
