require 'json'

file = File.read('./city_list.json')
data_hash = JSON.parse(file)



def cityPruner(data_hash)
    pruned_cities = []
    cities_with_duplicate_names_in_a_single_state = []

    data_hash.each do |city|
        pruned_cities.push(city) if city["country"] == "US"
    end
    pruned_cities
end

pruned_cities = cityPruner(data_hash)

File.write('./us_cities.json', JSON.dump(pruned_cities))