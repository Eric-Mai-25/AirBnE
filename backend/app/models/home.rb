# == Schema Information
#
# Table name: homes
#
#  id            :bigint           not null, primary key
#  host_id       :bigint           not null
#  property_type :string           not null
#  address       :string           not null
#  apt_num       :string           default(""), not null
#  city          :string           not null
#  state         :string           not null
#  country       :string           not null
#  title         :string           not null
#  description   :text             not null
#  num_beds      :integer          not null
#  num_bedrooms  :integer          not null
#  num_bathrooms :integer          not null
#  night_price   :float            not null
#  cleaning_fee  :float            not null
#  latitude      :float            not null
#  longitude     :float            not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Home < ApplicationRecord
    
end
