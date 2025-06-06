import { useState, useRef, useEffect } from "react";
import type { KeyboardEvent, ChangeEvent } from "react";

const cities: string[] = [
  "Karachi",
  "Lahore",
  "Faisalabad",
  "Rawalpindi",
  "Gujranwala",
  "Rahim Yar Khan",
  "Multan",
  "Peshawar",
  "Sargodha",
  "Quetta",
  "Hyderabad",
  "Bahawalpur",
  "Muzaffarabad",
  "Battagram",
  "Kotli",
  "Islamabad",
  "Sialkot",
  "Sukkur",
  "Larkana",
  "Shekhupura",
  "Bhimbar",
  "Jhang Sadr",
  "Gujrat",
  "Mardan",
  "Malir Cantonment",
  "Kasur",
  "Mingora",
  "Dera Ghazi Khan",
  "Sahiwal",
  "Nawabshah",
  "Okara",
  "Mirpur Khas",
  "Chiniot",
  "Shahkot",
  "Kamoke",
  "Saddiqabad",
  "Burewala",
  "Jacobabad",
  "Muzaffargarh",
  "Muridke",
  "Jhelum",
  "Shikarpur",
  "Hafizabad",
  "Kohat",
  "Khanpur",
  "Khuzdar",
  "Dadu",
  "Gojra",
  "Mandi Bahauddin",
  "Tando Allahyar",
  "Daska Kalan",
  "Pakpattan",
  "Bahawalnagar",
  "Tando Adam",
  "Khairpur Mir's",
  "Chishtian",
  "Abbottabad",
  "Jaranwala",
  "Ahmadpur East",
  "Vihari",
  "Kamalia",
  "Kot Addu",
  "Khushab",
  "Wazirabad",
  "Dera Ismail Khan",
  "Chakwal",
  "Swabi",
  "Lodhran",
  "Nowshera Cantonment",
  "Charsadda",
  "Jalalpur Jattan",
  "Mianwali",
  "Chaman",
  "Kandhkot",
  "Hasilpur",
  "Arifwala",
  "Mianke Mor",
  "Attock City",
  "Chichawatni",
  "Bhakkar",
  "Kharian",
  "Layyah",
  "Kambar",
  "Moro",
  "Mian Channun",
  "Turbat",
  "Shahdad Kot",
  "Bhalwal",
  "Dipalpur",
  "Badin",
  "Pano Aqil",
  "Kotri",
  "Tando Muhammad Khan",
  "Harunabad",
  "Pattoki",
  "Chenab Nagar",
  "Kahror Pakka",
  "Gujar Khan",
  "Kot Malik Barkhurdar",
  "Chuchar-kana Mandi",
  "Toba Tek Singh",
  "Narowal",
  "Shorkot",
  "Shahdadpur",
  "Shabqadar",
  "Mansehra",
  "Shujaabad",
  "Haveli Lakha",
  "Lala Musa",
  "Mailsi",
  "Shakargarh",
  "Ghotki",
  "Sibi",
  "Jampur",
  "Sambrial",
  "Sanghar",
  "Hujra Shah Muqim",
  "Kabirwala",
  "Chunian",
  "Sangla Hill",
  "Haripur",
  "Nankana Sahib",
  "Pasrur",
  "Gwadar",
  "Rajanpur",
  "Rohri",
  "Zhob",
  "Matli",
  "Rawala Kot",
  "Hadali",
  "Mirpur Mathelo",
  "Bannu",
  "Dullewala",
  "Hala",
  "Ratodero",
  "Jatoi Shimali",
  "Jauharabad",
  "Bat Khela",
  "Kot Radha Kishan",
  "Kahna Nau",
  "Mustafabad",
  "Chak Thirty-one -Eleven Left",
  "Talagang",
  "Taunsa",
  "Thatta",
  "Sarai Alamgir",
  "Usta Muhammad",
  "Kamra",
  "Umarkot",
  "Basirpur",
  "Sehwan",
  "Naushahra Virkan",
  "Fort Abbas",
  "Havelian",
  "Khairpur",
  "Dinga",
  "Ladhewala Waraich",
  "Khalabat",
  "New Badah",
  "Tank",
  "Kot Mumin",
  "Tandlianwala",
  "Chak Azam Sahu",
  "Loralai",
  "Jalalpur Pirwala",
  "Pabbi",
  "Chak Jhumra",
  "Sahiwal",
  "Renala Khurd",
  "Risalpur Cantonment",
  "Lakki",
  "Topi",
  "Hangu",
  "Pir Jo Goth",
  "Kundian",
  "Pir Mahal",
  "Khurrianwala",
  "Mehrabpur",
  "Pindi Bhattian",
  "Malakwal City",
  "Narang Mandi",
  "Malakwal",
  "Thul",
  "Pindi Gheb",
  "Zahir Pir",
  "Dunyapur",
  "Gambat",
  "Kashmor",
  "Alipur",
  "Naudero",
  "Pasni",
  "Sukheke Mandi",
  "Setharja Old",
  "Khewra",
  "Mamu Kanjan",
  "Sharqpur Sharif",
  "Digri",
  "Bhera",
  "Sakrand",
  "Tando Jam",
  "Raiwind",
  "Lalian",
  "Khairpur Tamewah",
  "Kharan",
  "Mehar",
  "Khangah Dogran",
  "Khairpur Nathan Shah",
  "Upper Dir",
  "Ghauspur",
  "Tangi",
  "Utmanzai",
  "Thal",
  "Minchianabad",
  "Garh Maharaja",
  "Jahanian Shah",
  "Mastung",
  "Mananwala",
  "Fazilpur",
  "Talamba",
  "Kunjah",
  "Jnawarian",
  "Nasirabad",
  "Nushki",
  "Sita Road",
  "Dijkot",
  "Sillanwali",
  "Kandiaro",
  "Zaida",
  "Kunri",
  "Kalat",
  "Daud Khel",
  "Mitha Tiwana",
  "Hazro City",
  "Dunga Bunga",
  "Aman Garh",
  "Karor",
  "Kot Diji",
  "Kalur Kot",
  "Murree",
  "Fagirwali",
  "Ahmadpur Sial",
  "Phalia",
  "Yazman",
  "Raja Jang",
  "Chak Five Hundred Seventy-five",
  "Pishin",
  "Chak One Hundred Twenty Nine Left",
  "Chawinda",
  "Ubauro",
  "Mithi",
  "Akora",
  "Zafarwal",
  "Kot Samaba",
  "Rallipur",
  "Kulachi",
  "Khanpur Mahar",
  "Hingorja",
  "Naukot",
  "Pind Dadan Khan",
  "Kanganpur",
  "Faruka",
  "Kotli Loharan",
  "Shahpur Chakar",
  "Talhar",
  "Pad Idan",
  "Kot Ghulam Muhammad",
  "Qadirpur Ran",
  "Bela",
  "Surkhpur",
  "Dhoro Naro",
  "Khangarh",
  "Sarai Naurang",
  "Gharo",
  "Bhit Shah",
  "Matiari",
  "Dhanot",
  "Warah",
  "Lachi",
  "Baddomalhi",
  "Jand",
  "Chak 249 Thal Development Authority",
  "Dera Bugti",
  "Tharu Shah",
  "Naushahro Firoz",
  "Dajal",
  "Daur",
  "Bhopalwala",
  "Paharpur",
  "Bhan",
  "Mach",
  "Goth Radhan",
  "Uthal",
  "Kaleke Mandi",
  "Jiwani",
  "Johi",
  "Chhor",
  "Mangla",
  "Bhawana",
  "Shahr Sultan",
  "Jhol",
  "Sodhri",
  "Kalabagh",
  "Sinjhoro",
  "Kamar Mushani",
  "Kallar Kahar",
  "Chuhar Jamali",
  "Harnoli",
  "Sarai Sidhu",
  "Choa Saidan Shah",
  "Dadhar",
  "Darya Khan",
  "Daira Din Panah",
  "Garhiyasin",
  "Madeji",
  "Dokri",
  "Sobhodero",
  "Dalbandin",
  "Daulatpur",
  "Bhag",
  "Rasulnagar",
  "Chak",
  "Shahpur",
  "Tando Bago",
  "Baffa",
  "Karak",
  "Garhi Khairo",
  "Lakhi",
  "Gadani",
  "Surab",
  "Rojhan",
  "Ormara",
  "Chamber",
  "Kalaswala",
  "Islamkot",
  "Liliani",
  "Bhiria",
  "Mirwah Gorchani",
  "Dhaunkal",
  "Daultala",
  "Diplo",
  "Kohlu",
  "Harnai",
  "Jandiala Sher Khan",
  "Daromehar",
  "Mankera",
  "Sanjwal",
  "Miro Khan",
  "Gilgit",
  "Kot Sultan",
  "Khadro",
  "Berani",
  "Begowala",
  "Tangwani",
  "Bozdar Wada",
  "Jati",
  "Rustam",
  "Darya Khan Marri",
  "Sohbatpur",
  "Doaba",
  "Mirpur Bhtoro",
  "Sann",
  "Samaro",
  "Barkhan",
  "Bandhi",
  "Karaundi",
  "Mirpur Sakro",
  "Adilpur",
  "Bagarji",
  "Goth Phulji",
  "Rajo Khanani",
  "Alik Ghund",
  "Dinan Bashnoian Wala",
  "Jam Sahib",
  "Kandiari",
  "Kadhan",
  "Goth Garelo",
  "Nazir Town",
  "Khadan Khak",
  "Pithoro",
  "Duki",
  "Nabisar",
  "Kario Ghanwar",
  "Parachinar",
];

export default function CitySearchDropdown({ handleSearch }: any) {
  const [query, setQuery] = useState<string>("");
  const [filteredCities, setFilteredCities] = useState<string[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    const filtered = cities.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCities(filtered);
    setHighlightedIndex(-1);
  };

  // const handleSearch = () => {
  //   const selectedCity =
  //     highlightedIndex >= 0 ? filteredCities[highlightedIndex] : query;
  //   alert(`Searching for: ${selectedCity}`);
  // };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        Math.min(prev + 1, filteredCities.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0 && filteredCities.length > 0) {
        setQuery(filteredCities[highlightedIndex]);
        setFilteredCities([]);
        setHighlightedIndex(-1);
      } else {
        handleSearch(query);
      }
    }
  };

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current && highlightedIndex >= 0) {
      const li = listRef.current.children[highlightedIndex] as HTMLLIElement;
      li?.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setFilteredCities([]);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="flex items-center justify-center text-black w-[80%] m-auto"
      ref={containerRef}
    >
      <div className="relative w-full">
        <div className="flex px-3 py-2 rounded-xl border border-gray-300 bg-white shadow">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (query.trim()) {
                const filtered = cities.filter((city) =>
                  city.toLowerCase().includes(query.toLowerCase())
                );
                setFilteredCities(filtered);
              }
            }}
            placeholder="Search for a city..."
            className="flex-grow outline-none"
          />
          <button
            onClick={() => {
              if (cities.includes(query)) {
                handleSearch(query);
              } else {
                alert("Select a Valid City Name");
              }
            }}
            className="px-6 bg-green-500 text-white rounded-r-xl hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>

        {query && filteredCities.length > 0 && (
          <ul
            ref={listRef}
            className="absolute z-10 w-full bg-white shadow-lg rounded-b-xl border border-t-0 max-h-60 overflow-auto"
          >
            {filteredCities.map((city, index) => (
              <li
                key={index}
                className={`px-4 py-2 cursor-pointer ${
                  highlightedIndex === index
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => {
                  setQuery(city);
                  setFilteredCities([]);
                  setHighlightedIndex(-1);
                }}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
