/* timezones for select */
var timezones = [
        ['(GMT-11) Pacific/Midway', '-11a'],
        ['(GMT-11) Pacific/Niue', '-11b'],
        ['(GMT-11) Pacific/Pago_Pago', '-11c'],
        ['(GMT-10) Pacific/Johnston', '-10a'],
        ['(GMT-10) Pacific/Rarotonga', '-10c'],
        ['(GMT-10) Pacific/Tahiti', '-10b'],
        ['(GMT-9.5) Pacific/Marquesas', '-9.5a'],
        ['(GMT-9) Pacific/Gambier', '-9a'],
        ['(GMT-8) Pacific/Pitcairn', '-8a'],
        ['(GMT-7) (Pacific Time Zone)', '-7a'],
        ['(GMT-7) America/Hermosillo', '-7b'],
        ['(GMT-7) America/Santa_Isabel', '-7c'],
        ['(GMT-7) America/Tijuana', '-7d'],
        ['(GMT-6) (Mountain Time Zone MDT)', '-6a'],
        ['(GMT-6) America/Belize', '-6b'],
        ['(GMT-6) America/Chihuahua', '-6c'],
        ['(GMT-6) America/Costa_Rica', '-6d'],
        ['(GMT-6) America/El_Salvador', '-6e'],
        ['(GMT-6) America/Guatemala', '-6f'],
        ['(GMT-6) America/Managua', '-6g'],
        ['(GMT-6) America/Mazatlan', '-6h'],
        ['(GMT-6) America/Ojinaga', '-6i'],
        ['(GMT-6) America/Tegucigalpa', '-6j'],
        ['(GMT-6) Pacific/Easter', '-6k'],
        ['(GMT-6) Pacific/Galapagos', '-6l'],
        ['(GMT-5) (Central Time Zone) CDT', '-5a'],
        ['(GMT-5) America/Bahia_Banderas', '-5b'],
        ['(GMT-5) America/Bogota', '-5c'],
        ['(GMT-5) America/Cancun', '-5d'],
        ['(GMT-5) America/Cayman', '-5e'],
        ['(GMT-5) America/Eirunepe', '-5f'],
        ['(GMT-5) America/Guayaquil', '-5g'],
        ['(GMT-5) America/Jamaica', '-5h'],
        ['(GMT-5) America/Lima', '-5i'],
        ['(GMT-5) America/Matamoros', '-5j'],
        ['(GMT-5) America/Merida', '-5k'],
        ['(GMT-5) America/Mexico_City', '-5l'],
        ['(GMT-5) America/Monterrey', '-5m'],
        ['(GMT-5) America/Panama', '-5n'],
        ['(GMT-5) America/Rio_Branco', '-5o'],
        ['(GMT-4.5)', '-4.5a'],
        ['(GMT-4.5) America/Caracas', '-4.5b'],
        ['(GMT-4) (Eastern Standard Time) EST ', '-4a'],
        ['(GMT-4) America/Anguilla', '-4b'],
        ['(GMT-4) America/Antigua', '-4c'],
        ['(GMT-4) America/Aruba', '-4d'],
        ['(GMT-4) America/Asuncion', '-4e'],
        ['(GMT-4) America/Barbados', '-4f'],
        ['(GMT-4) America/Boa_Vista', '-4g'],
        ['(GMT-4) America/Campo_Grande', '-4h'],
        ['(GMT-4) America/Cuiaba', '-4i'],
        ['(GMT-4) America/Curacao', '-4j'],
        ['(GMT-4) America/Dominica', '-4k'],
        ['(GMT-4) America/Grand_Turk', '-4l'],
        ['(GMT-4) America/Grenada', '-4m'],
        ['(GMT-4) America/Guadeloupe', '-4n'],
        ['(GMT-4) America/Guyana', '-4o'],
        ['(GMT-4) America/Havana', '-4p'],
        ['(GMT-4) America/Kralendijk', '-4q'],
        ['(GMT-4) America/La_Paz', '-4r'],
        ['(GMT-4) America/Lower_Princes', '-4s'],
        ['(GMT-4) America/Manaus', '-4t'],
        ['(GMT-4) America/Marigot', '-4u'],
        ['(GMT-4) America/Martinique', '-4v'],
        ['(GMT-4) America/Montserrat', '-4w'],
        ['(GMT-4) America/Nassau', '-4x'],
        ['(GMT-4) America/Port-au-Prince', '-4y'],
        ['(GMT-4) America/Port_of_Spain', '-4z'],
        ['(GMT-4) America/Porto_Velho', '-4A'],
        ['(GMT-4) America/Puerto_Rico', '-4B'],
        ['(GMT-4) America/Santiago', '-4C'],
        ['(GMT-4) America/Santo_Domingo', '-4D'],
        ['(GMT-4) America/St_Barthelemy', '-4E'],
        ['(GMT-4) America/St_Kitts', '-4F'],
        ['(GMT-4) America/St_Lucia', '-4G'],
        ['(GMT-4) America/St_Thomas', '-4H'],
        ['(GMT-4) America/St_Vincent', '-4I'],
        ['(GMT-4) America/Tortola', '-4J'],
        ['(GMT-4) Antarctica/Palmer', '-4K'],
        ['(GMT-3)', '-3a'],
        ['(GMT-3) America/Araguaina', '-3b'],
        ['(GMT-3) America/Argentina/Buenos_Aires', '-3c'],
        ['(GMT-3) America/Argentina/Catamarca', '-3d'],
        ['(GMT-3) America/Argentina/Cordoba', '-3e'],
        ['(GMT-3) America/Argentina/Jujuy', '-3f'],
        ['(GMT-3) America/Argentina/La_Rioja', '-3g'],
        ['(GMT-3) America/Argentina/Mendoza', '-3h'],
        ['(GMT-3) America/Argentina/Rio_Gallegos', '-3i'],
        ['(GMT-3) America/Argentina/Salta', '-3j'],
        ['(GMT-3) America/Argentina/San_Juan', '-3k'],
        ['(GMT-3) America/Argentina/San_Luis', '-3l'],
        ['(GMT-3) America/Argentina/Tucuman', '-3m'],
        ['(GMT-3) America/Argentina/Ushuaia', '-3n'],
        ['(GMT-3) America/Bahia', '-3o'],
        ['(GMT-3) America/Belem', '-3p'],
        ['(GMT-3) America/Cayenne', '-3q'],
        ['(GMT-3) America/Fortaleza', '-3r'],
        ['(GMT-3) America/Maceio', '-3s'],
        ['(GMT-3) America/Montevideo', '-3t'],
        ['(GMT-3) America/Paramaribo', '-3u'],
        ['(GMT-3) America/Recife', '-3v'],
        ['(GMT-3) America/Santarem', '-3w'],
        ['(GMT-3) America/Sao_Paulo', '-3x'],
        ['(GMT-3) America/Thule', '-3y'],
        ['(GMT-3) Antarctica/Rothera', '-3z'],
        ['(GMT-3) Atlantic/Bermuda', '-3A'],
        ['(GMT-3) Atlantic/Stanley', '-3B'],
        ['(GMT-2) America/Godthab', '-2a'],
        ['(GMT-2) America/Miquelon', '-2b'],
        ['(GMT-2) America/Noronha', '-2c'],
        ['(GMT-2) Atlantic/South_Georgia', '-2d'],
        ['(GMT-1) Atlantic/Cape_Verde', '-1a'],
        ['(GMT+0) Africa/Abidjan', '+0a'],
        ['(GMT+0) Africa/Accra', '+0b'],
        ['(GMT+0) Africa/Bamako', '+0c'],
        ['(GMT+0) Africa/Banjul', '+0d'],
        ['(GMT+0) Africa/Bissau', '+0e'],
        ['(GMT+0) Africa/Conakry', '+0f'],
        ['(GMT+0) Africa/Dakar', '+0g'],
        ['(GMT+0) Africa/Freetown', '+0h'],
        ['(GMT+0) Africa/Lome', '+0i'],
        ['(GMT+0) Africa/Monrovia', '+0j'],
        ['(GMT+0) Africa/Nouakchott', '+0k'],
        ['(GMT+0) Africa/Ouagadougou', '+0l'],
        ['(GMT+0) Africa/Sao_Tome', '+0m'],
        ['(GMT+0) America/Danmarkshavn', '+0n'],
        ['(GMT+0) America/Scoresbysund', '+0o'],
        ['(GMT+0) Atlantic/Azores', '+0p'],
        ['(GMT+0) Atlantic/Reykjavik', '+0q'],
        ['(GMT+0) Atlantic/St_Helena', '+0r'],
        ['(GMT+1) Africa/Algiers', '+1a'],
        ['(GMT+1) Africa/Bangui', '+1b'],
        ['(GMT+1) Africa/Brazzaville', '+1c'],
        ['(GMT+1) Africa/Casablanca', '+1d'],
        ['(GMT+1) Africa/Douala', '+1e'],
        ['(GMT+1) Africa/El_Aaiun', '+1f'],
        ['(GMT+1) Africa/Kinshasa', '+1g'],
        ['(GMT+1) Africa/Lagos', '+1h'],
        ['(GMT+1) Africa/Libreville', '+1i'],
        ['(GMT+1) Africa/Luanda', '+1j'],
        ['(GMT+1) Africa/Malabo', '+1k'],
        ['(GMT+1) Africa/Ndjamena', '+1l'],
        ['(GMT+1) Africa/Porto-Novo', '+1m'],
        ['(GMT+1) Africa/Tunis', '+1n'],
        ['(GMT+1) Africa/Windhoek', '+1o'],
        ['(GMT+1) Atlantic/Canary', '+1p'],
        ['(GMT+1) Atlantic/Faroe', '+1q'],
        ['(GMT+1) Atlantic/Madeira', '+1r'],
        ['(GMT+1) Europe/Dublin', '+1s'],
        ['(GMT+1) Europe/Guernsey', '+1t'],
        ['(GMT+1) Europe/Isle_of_Man', '+1u'],
        ['(GMT+1) Europe/Jersey', '+1v'],
        ['(GMT+1) Europe/Lisbon', '+1w'],
        ['(GMT+1) Europe/London', '+1x'],
        ['(GMT+2) Africa/Blantyre', '+2a'],
        ['(GMT+2) Africa/Bujumbura', '+2b'],
        ['(GMT+2) Africa/Cairo', '+2c'],
        ['(GMT+2) Africa/Ceuta', '+2d'],
        ['(GMT+2) Africa/Gaborone', '+2e'],
        ['(GMT+2) Africa/Harare', '+2f'],
        ['(GMT+2) Africa/Johannesburg', '+2g'],
        ['(GMT+2) Africa/Kigali', '+2h'],
        ['(GMT+2) Africa/Lubumbashi', '+2i'],
        ['(GMT+2) Africa/Lusaka', '+2j'],
        ['(GMT+2) Africa/Maputo', '+2k'],
        ['(GMT+2) Africa/Maseru', '+2l'],
        ['(GMT+2) Africa/Mbabane', '+2m'],
        ['(GMT+2) Africa/Tripoli', '+2n'],
        ['(GMT+2) Europe/Amsterdam', '+2o'],
        ['(GMT+2) Europe/Andorra', '+2p'],
        ['(GMT+2) Europe/Belgrade', '+2q'],
        ['(GMT+2) Europe/Berlin', '+2r'],
        ['(GMT+2) Europe/Bratislava', '+2s'],
        ['(GMT+2) Europe/Brussels', '+2t'],
        ['(GMT+2) Europe/Budapest', '+2u'],
        ['(GMT+2) Europe/Busingen', '+2v'],
        ['(GMT+2) Europe/Copenhagen', '+2w'],
        ['(GMT+2) Europe/Gibraltar', '+2x'],
        ['(GMT+2) Europe/Ljubljana', '+2y'],
        ['(GMT+2) Europe/Luxembourg', '+2z'],
        ['(GMT+2) Europe/Madrid', '+2A'],
        ['(GMT+2) Europe/Malta', '+2B'],
        ['(GMT+2) Europe/Monaco', '+2C'],
        ['(GMT+2) Europe/Oslo', '+2D'],
        ['(GMT+2) Europe/Paris', '+2E'],
        ['(GMT+2) Europe/Podgorica', '+2F'],
        ['(GMT+2) Europe/Prague', '+2G'],
        ['(GMT+2) Europe/Rome', '+2H'],
        ['(GMT+2) Europe/San_Marino', '+2I'],
        ['(GMT+2) Europe/Sarajevo', '+2J'],
        ['(GMT+2) Europe/Skopje', '+2K'],
        ['(GMT+2) Europe/Stockholm', '+2L'],
        ['(GMT+2) Europe/Tirane', '+2M'],
        ['(GMT+2) Europe/Vaduz', '+2N'],
        ['(GMT+2) Europe/Vatican', '+2O'],
        ['(GMT+2) Europe/Vienna', '+2P'],
        ['(GMT+2) Europe/Warsaw', '+2Q'],
        ['(GMT+2) Europe/Zagreb', '+2R'],
        ['(GMT+2) Europe/Zurich', '+2S'],
        ['(GMT+3) Africa/Addis_Ababa', '+3a'],
        ['(GMT+3) Africa/Asmara', '+3b'],
        ['(GMT+3) Africa/Dar_es_Salaam', '+3c'],
        ['(GMT+3) Africa/Djibouti', '+3d'],
        ['(GMT+3) Africa/Juba', '+3e'],
        ['(GMT+3) Africa/Kampala', '+3f'],
        ['(GMT+3) Africa/Khartoum', '+3g'],
        ['(GMT+3) Africa/Mogadishu', '+3h'],
        ['(GMT+3) Africa/Nairobi', '+3i'],
        ['(GMT+3) Antarctica/Syowa', '+3j'],
        ['(GMT+3) Asia/Aden', '+3k'],
        ['(GMT+3) Asia/Amman', '+3l'],
        ['(GMT+3) Asia/Baghdad', '+3m'],
        ['(GMT+3) Asia/Bahrain', '+3n'],
        ['(GMT+3) Asia/Beirut', '+3o'],
        ['(GMT+3) Asia/Damascus', '+3p'],
        ['(GMT+3) Asia/Gaza', '+3q'],
        ['(GMT+3) Asia/Hebron', '+3r'],
        ['(GMT+3) Asia/Jerusalem', '+3s'],
        ['(GMT+3) Asia/Kuwait', '+3t'],
        ['(GMT+3) Asia/Nicosia', '+3u'],
        ['(GMT+3) Asia/Qatar', '+3v'],
        ['(GMT+3) Asia/Riyadh', '+3w'],
        ['(GMT+3) Europe/Athens', '+3x'],
        ['(GMT+3) Europe/Bucharest', '+3y'],
        ['(GMT+3) Europe/Chisinau', '+3z'],
        ['(GMT+3) Europe/Helsinki', '+3A'],
        ['(GMT+3) Europe/Istanbul', '+3B'],
        ['(GMT+3) Europe/Kaliningrad', '+3C'],
        ['(GMT+3) Europe/Kiev', '+3D'],
        ['(GMT+3) Europe/Mariehamn', '+3E'],
        ['(GMT+3) Europe/Minsk', '+3F'],
        ['(GMT+3) Europe/Riga', '+3G'],
        ['(GMT+3) Europe/Simferopol', '+3H'],
        ['(GMT+3) Europe/Sofia', '+3I'],
        ['(GMT+3) Europe/Tallinn', '+3J'],
        ['(GMT+3) Europe/Uzhgorod', '+3K'],
        ['(GMT+3) Europe/Vilnius', '+3L'],
        ['(GMT+3) Europe/Zaporozhye', '+3M'],
        ['(GMT+3) Indian/Antananarivo', '+3N'],
        ['(GMT+3) Indian/Comoro', '+3O'],
        ['(GMT+3) Indian/Mayotte', '+3P'],
        ['(GMT+4) Asia/Dubai', '+4a'],
        ['(GMT+4) Asia/Muscat', '+4b'],
        ['(GMT+4) Asia/Tbilisi', '+4c'],
        ['(GMT+4) Asia/Yerevan', '+4d'],
        ['(GMT+4) Europe/Moscow', '+4e'],
        ['(GMT+4) Europe/Samara', '+4f'],
        ['(GMT+4) Europe/Volgograd', '+4g'],
        ['(GMT+4) Indian/Mahe', '+4h'],
        ['(GMT+4) Indian/Mauritius', '+4i'],
        ['(GMT+4) Indian/Reunion', '+4j'],
        ['(GMT+4.5) Asia/Kabul', '+4.5a'],
        ['(GMT+4.5) Asia/Tehran', '+4.5b'],
        ['(GMT+5) Antarctica/Mawson', '+5a'],
        ['(GMT+5) Asia/Aqtau', '+5b'],
        ['(GMT+5) Asia/Aqtobe', '+5c'],
        ['(GMT+5) Asia/Ashgabat', '+5d'],
        ['(GMT+5) Asia/Baku', '+5e'],
        ['(GMT+5) Asia/Dushanbe', '+5f'],
        ['(GMT+5) Asia/Karachi', '+5g'],
        ['(GMT+5) Asia/Oral', '+5h'],
        ['(GMT+5) Asia/Samarkand', '+5i'],
        ['(GMT+5) Asia/Tashkent', '+5j'],
        ['(GMT+5) Indian/Kerguelen', '+5k'],
        ['(GMT+5) Indian/Maldives', '+5l'],
        ['(GMT+5.5) Asia/Colombo', '+5.5a'],
        ['(GMT+5.5) Asia/Kolkata', '+5.5b'],
        ['(GMT+5.75) Asia/Kathmandu', '+5.75a'],
        ['(GMT+6) Antarctica/Vostok', '+6a'],
        ['(GMT+6) Asia/Almaty', '+6b'],
        ['(GMT+6) Asia/Bishkek', '+6c'],
        ['(GMT+6) Asia/Dhaka', '+6d'],
        ['(GMT+6) Asia/Qyzylorda', '+6e'],
        ['(GMT+6) Asia/Thimphu', '+6f'],
        ['(GMT+6) Asia/Yekaterinburg', '+6g'],
        ['(GMT+6) Indian/Chagos', '+6h'],
        ['(GMT+6.5) Asia/Rangoon', '+6.5a'],
        ['(GMT+6.5) Indian/Cocos', '+6.5b'],
        ['(GMT+7) Antarctica/Davis', '+7a'],
        ['(GMT+7) Asia/Bangkok', '+7b'],
        ['(GMT+7) Asia/Ho_Chi_Minh', '+7c'],
        ['(GMT+7) Asia/Hovd', '+7d'],
        ['(GMT+7) Asia/Jakarta', '+7e'],
        ['(GMT+7) Asia/Novokuznetsk', '+7f'],
        ['(GMT+7) Asia/Novosibirsk', '+7g'],
        ['(GMT+7) Asia/Phnom_Penh', '+7h'],
        ['(GMT+7) Asia/Pontianak', '+7i'],
        ['(GMT+7) Asia/Vientiane', '+7j'],
        ['(GMT+7) Indian/Christmas', '+7k'],
        ['(GMT+8) Antarctica/Casey', '+8l'],
        ['(GMT+8) Asia/Brunei', '+8m'],
        ['(GMT+8) Asia/Choibalsan', '+8n'],
        ['(GMT+8) Asia/Chongqing', '+8o'],
        ['(GMT+8) Asia/Harbin', '+8p'],
        ['(GMT+8) Asia/Hong_Kong', '+8q'],
        ['(GMT+8) Asia/Kashgar', '+8r'],
        ['(GMT+8) Asia/Krasnoyarsk', '+8s'],
        ['(GMT+8) Asia/Kuala_Lumpur', '+8t'],
        ['(GMT+8) Asia/Kuching', '+8u'],
        ['(GMT+8) Asia/Macau', '+8v'],
        ['(GMT+8) Asia/Makassar', '+8w'],
        ['(GMT+8) Asia/Manila', '+8x'],
        ['(GMT+8) Asia/Shanghai', '+8y'],
        ['(GMT+8) Asia/Singapore', '+8z'],
        ['(GMT+8) Asia/Taipei', '+8A'],
        ['(GMT+8) Asia/Ulaanbaatar', '+8B'],
        ['(GMT+8) Asia/Urumqi', '+8C'],
        ['(GMT+8) Australia/Perth', '+8D'],
        ['(GMT+8.75) Australia/Eucla', '+8.75a'],
        ['(GMT+9) Asia/Dili', '+9a'],
        ['(GMT+9) Asia/Irkutsk', '+9b'],
        ['(GMT+9) Asia/Jayapura', '+9c'],
        ['(GMT+9) Asia/Pyongyang', '+9d'],
        ['(GMT+9) Asia/Seoul', '+9e'],
        ['(GMT+9) Asia/Tokyo', '+9f'],
        ['(GMT+9) Pacific/Palau', '+9g'],
        ['(GMT+9.5) Australia/Adelaide', '+9.5a'],
        ['(GMT+9.5) Australia/Broken_Hill', '+9.5b'],
        ['(GMT+9.5) Australia/Darwin', '+9.5c'],
        ['(GMT+10) Antarctica/DumontDUrville', '+10a'],
        ['(GMT+10) Asia/Khandyga', '+10b'],
        ['(GMT+10) Asia/Yakutsk', '+10c'],
        ['(GMT+10) Australia/Brisbane', '+10d'],
        ['(GMT+10) Australia/Currie', '+10e'],
        ['(GMT+10) Australia/Hobart', '+10f'],
        ['(GMT+10) Australia/Lindeman', '+10g'],
        ['(GMT+10) Australia/Melbourne', '+10h'],
        ['(GMT+10) Australia/Sydney', '+10i'],
        ['(GMT+10) Pacific/Chuuk', '+10j'],
        ['(GMT+10) Pacific/Guam', '+10k'],
        ['(GMT+10) Pacific/Port_Moresby', '+10l'],
        ['(GMT+10) Pacific/Saipan', '+10m'],
        ['(GMT+10.5) Australia/Lord_Howe', '+10.5a'],
        ['(GMT+11) Antarctica/Macquarie', '+11a'],
        ['(GMT+11) Asia/Sakhalin', '+11b'],
        ['(GMT+11) Asia/Ust-Nera', '+11c'],
        ['(GMT+11) Asia/Vladivostok', '+11d'],
        ['(GMT+11) Pacific/Efate', '+11e'],
        ['(GMT+11) Pacific/Guadalcanal', '+11f'],
        ['(GMT+11) Pacific/Kosrae', '+11g'],
        ['(GMT+11) Pacific/Noumea', '+11h'],
        ['(GMT+11) Pacific/Pohnpei', '+11i'],
        ['(GMT+11.5) Pacific/Norfolk', '+11.5a'],
        ['(GMT+12) Antarctica/McMurdo', '+12a'],
        ['(GMT+12) Asia/Anadyr', '+12b'],
        ['(GMT+12) Asia/Kamchatka', '+12c'],
        ['(GMT+12) Asia/Magadan', '+12d'],
        ['(GMT+12) Pacific/Auckland', '+12e'],
        ['(GMT+12) Pacific/Fiji', '+12f'],
        ['(GMT+12) Pacific/Funafuti', '+12g'],
        ['(GMT+12) Pacific/Kwajalein', '+12h'],
        ['(GMT+12) Pacific/Majuro', '+12i'],
        ['(GMT+12) Pacific/Nauru', '+12j'],
        ['(GMT+12) Pacific/Tarawa', '+12k'],
        ['(GMT+12) Pacific/Wake', '+12l'],
        ['(GMT+12) Pacific/Wallis', '+12m'],
        ['(GMT+12.75) Pacific/Chatham', '+12.75a'],
        ['(GMT+13) Pacific/Apia', '+13a'],
        ['(GMT+13) Pacific/Enderbury', '+13b'],
        ['(GMT+13) Pacific/Fakaofo', '+13c'],
        ['(GMT+13) Pacific/Tongatapu', '+13d'],
        ['(GMT+14) Pacific/Kiritimati ', '+14a']
];

module.exports.timezones = timezones;