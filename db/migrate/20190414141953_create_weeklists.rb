class CreateWeeklists < ActiveRecord::Migration[5.2]
  def change
    create_table :weeklists do |t|
      t.integer :weeknr

      t.timestamps
    end
  end
end
