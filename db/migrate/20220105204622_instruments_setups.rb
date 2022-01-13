class InstrumentsSetups < ActiveRecord::Migration[6.1]
  def change
    create_table :instruments_setups, id: false do |t|
      t.belongs_to :instrument
      t.belongs_to :setup
    end
  end
end
