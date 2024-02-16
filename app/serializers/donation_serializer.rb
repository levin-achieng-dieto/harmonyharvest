class DonationSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :location, :delivery
end
