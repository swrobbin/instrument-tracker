class AddInstrumentToSetups < ActiveRecord::Migration[6.1]
  def change
    add_column :setups, :instrument_id, :integer
  end
end
