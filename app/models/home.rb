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
#  category      :string           not null
#  has_wifi      :boolean          default(FALSE), not null
#  has_pets      :boolean          default(FALSE), not null
#  has_kitchen   :boolean          default(FALSE), not null
#  has_ac        :boolean          default(FALSE), not null
#  has_heat      :boolean          default(FALSE), not null
#  has_tv        :boolean          default(FALSE), not null
#  has_parking   :boolean          default(FALSE), not null
#  has_fireplace :boolean          default(FALSE), not null
#
class Home < ApplicationRecord
  # CATEGORIES = ["beachfront", "countryside", "cabin", "mansion", "lakefront", "amazing views", "tiny home", "modern", "barn", "omg"]

  PROPERTY_TYPES = ["House", "Apartment", "Studio", "Cabin", "Private Room"]

  validates :host_id, :address, :city, :state, :country, :title, :description, :longitude, :latitude, presence: true
  validates :property_type, inclusion: { in: PROPERTY_TYPES }
  validates :has_wifi, :has_pets, :has_kitchen, :has_ac, :has_heat, :has_tv, :has_parking, :has_fireplace, inclusion: [true, false]
  validates :num_beds, :num_bedrooms, :num_bathrooms, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :night_price, presence: true, numericality: { greater_than: 0 }
  validates :cleaning_fee, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates_uniqueness_of :address, scope: [:apt_num, :city], message: "has already been listed"

  belongs_to :host,
             class_name: :User,
             foreign_key: :host_id

  has_many :reservations,
           class_name: :Reservation,
           foreign_key: :home_id,
           dependent: :destroy,
           inverse_of: :home

  has_many :reviews,
           dependent: :destroy,
           inverse_of: :home

  has_many_attached :images

  has_one_attached :photo

end
