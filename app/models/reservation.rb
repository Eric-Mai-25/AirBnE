# == Schema Information
#
# Table name: reservations
#
#  id                 :bigint           not null, primary key
#  guest_id           :bigint           not null
#  home_id            :bigint           not null
#  check_in_date      :date
#  check_out_date     :date
#  total_price        :float
#  reservation_status :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class Reservation < ApplicationRecord
  STATUS = ["pending", "reserved", "cancelled", "fin"]

  validates :reservation_status, inclusion: { in: STATUS }

  belongs_to :guest,
             class_name: :User,
             foreign_key: :guest_id

  belongs_to :home,
             class_name: :Home,
             foreign_key: :home_id
             
end
