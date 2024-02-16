class CreateDonations < ActiveRecord::Migration[7.0]
  def change
    create_table :donations do |t|
      t.string :name
      t.integer :phone
      t.string :location
      t.string :delivery

      t.timestamps
    end
  end
end
