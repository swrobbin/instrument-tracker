class RemoveInstrumentIdFromSetups < ActiveRecord::Migration[6.1]
  def change
    remove_column :setups, :instrument_id, :integer
  end
end
