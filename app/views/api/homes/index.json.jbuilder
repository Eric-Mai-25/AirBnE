@homes.each do |home|
    json.set! home.id do
      json.extract! home, :id, :title, :night_price
    end
  end