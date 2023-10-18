json.merge! @home.attributes
# json.hostname @home.host.username
# json.hostpofile @home.host.profile_picture

reviews = @home.reviews.includes(:home)


json.reviews do
    reviews.each do |review|
        json.set! review.id do
            json.merge! review.attributes
            json.username review.author.username
            json.profile review.author.profile_picture
        end
    end
end

