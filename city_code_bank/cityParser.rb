require 'json'

file = File.read('./city_list.json')
data_hash = JSON.parse(file)

def cityPruner(data_hash)
    cityIDObj = {}

    data_hash.each do |city|
        
        if city["country"] == "US" 
            cityIDObj[city["state"] + city["name"]] = city["id"]
        end

    end
    cityIDObj
end

pruned_city_ids = cityPruner(data_hash)



File.write('./us_cities.json', JSON.dump(pruned_city_ids))