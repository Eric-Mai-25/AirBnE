@homes.each do |home|
    json.set! home.id do
      json.extract! home, :id, :title, :night_price
      json.photoUrls home.images.attached? ? home.images.map { |photo| url_for(photo) } : []
    end
  end