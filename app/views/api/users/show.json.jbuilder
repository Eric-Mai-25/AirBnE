json.user do
    json.extract! @user, :id, :email, :username, :phone_number, :created_at, :updated_at
  end


reviews = @user.reviews.includes(:author)

json.reviews do
  reviews.each do |review|
    json.set! review.id do
      json.merge! review.attributes
    end
  end
end

reservations = @user.reservations.includes(:guest)


json.reservations do
  reservations.each do |reservation|
    json.set! reservation.id do
      json.merge! reservation.attributes
    end
  end
end