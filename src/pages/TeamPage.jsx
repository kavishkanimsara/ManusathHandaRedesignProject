import React from 'react';

const TeamPage = () => {
  const Voiceteam1 = [
    { col1: 'Rtr. U.R.B.M.Ariyadasa', col2: 'Rtr. R.M.O.Gangangana' },
    { col1: 'Rtr. L.Tharindu Nirmal Wickremasinghe', col2: 'Rtr. Tharani Karunathilake' },
    { col1: 'Rtr. Ekanayakage Gayani Nishadika', col2: 'Rtr. Lakshitha Lahiru Perera' },
    { col1: 'Rtr. J.H Eranga Malindi', col2: 'Rtr. Chandika Maduvantha' },
    { col1: 'Rtr. Tharushika Liyanapathirana', col2: 'Rtr. Gayathrika Gaweshini' },
    { col1: 'Rtr. Ridmi Sameera Thilakarathna', col2: 'Rtr. Arudselvam Uthayamalini' },
    { col1: 'Rtr. Sanduni Wathsala Karunarathna', col2: 'Rtr. Karthiga Sivapiragasam' },
    { col1: 'Rtr. Gimsara Kulathunga Rathnayaka P.', col2: 'Rtr. Dakshana Vijayanathan' },
    { col1: 'Rtr. D.R.D.Dinukshi', col2: 'Rtr. Luxshika Uthayakumar' },
    { col1: 'Rtr. Athauda Achchillage Ransi S.', col2: 'Rtr. B.L.L.U. Liyanage' },
    { col1: 'Rtr. S.S. Arachchige Malindu Gimhan', col2: 'Rtr. Sajani Senadheera' },
    { col1: 'Rtr. A.A.D.C.D Amarasinghe', col2: 'Rtr. Jayodha Dissanayaka' },
    { col1: 'Rtr. Sahan Sulochana Hettiarachchi', col2: 'Rtr. Madhushika Munasinghe' },
    { col1: 'Rtr. H.M.H.T.Munasinghe', col2: 'Rtr. Ravindu Hiroshan' },
    { col1: 'Rtr. D.M.P.Harshani Pussepitiya', col2: 'Rtr. Nirasha Wimalasooriya' },
    { col1: 'Rtr. Prarthana Gamage', col2: 'Rtr. Isuri Illeperuma' },
    { col1: 'Rtr. Pamal Rojitha Nanayakkara', col2: 'Rtr. Pasan de Silva' },
    { col1: 'Rtr. L.R.Vishmini Navoda Rathnakumara', col2: 'Rtr. Dilshan Pramudith Bandara' },
    { col1: 'Rtr. Hewa Paththinige Nimesh B. A.', col2: 'Rtr. Samanthika Rajapaksha' },
    { col1: 'Rtr. U.A.Balasooriya', col2: 'Rtr. Dulmi Kathriachchi' },
    { col1: 'Rtr. Dinithi Navodya', col2: 'Rtr. Dulinda Perera' },
    { col1: 'Rtr. P.M. Nuwan Sriyantha Bandara', col2: 'Rtr. Chathumi Thumbovila' },
    { col1: 'Rtr. W.W.M.N.T.Wickramasingha', col2: 'Rtr. Ayesh Malindu' },
    { col1: 'Rtr. O.S. Ivani de Silva', col2: 'Rtr. Duneesha Ariyawansa' },
    { col1: 'Rtr. Nushan Vitharana', col2: 'Rtr. Sandali Liyanagoonawardena' },
    { col1: 'Rtr. Aseka Warnakulasooriya', col2: 'Rtr. D.M.P.S. Dissanayake' },
    { col1: 'Rtr. A.U.P.H.Athukorala', col2: 'Rtr. L.D.H.Gimhani' },
    { col1: 'Rtr. Dushan Dissanayake', col2: 'Rtr. B.R.W.M.D.Thoradeniya' },
    { col1: 'Rtr. Dakshina Ranmal', col2: 'Rtr. P.G.M.S.Gunarathne' },
    { col1: 'Rtr. Himali Wijekoon', col2: 'Rtr. R.A.D.J.N.Ranasinghe' },
    { col1: 'Rtr. Anuradhi De Silva', col2: 'Rtr. J.M.P.M.Jayawardane' },
    { col1: 'Rtr. Neha Ambegoda', col2: 'Rtr. P.M.P.B.Uyangoda' },
    { col1: 'Rtr. T.M.P.Nisansala Thennakoon', col2: 'Rtr. S.M.U.I.Senadhipathi' },
    { col1: 'Rtr. K.Ranushika Ranatunga Gomes', col2: 'Rtr. Tharindu Samarakoon' },
    { col1: 'Rtr. K.L.D.Dulshi Tharuka Liyanage', col2: 'Rtr. Nimana Perera' },
    { col1: 'Rtr. Ramodya Lakrandi', col2: 'Miss. Chamali Dewmini Thanthiriwattha' },
    { col1: 'Rtr. Dasun Madhawa Premathilaka', col2: 'Rtr. Chamika Erandi Wickramarathne' },
    { col1: 'Rtr. S.Bimsara Malith Somarathna', col2: 'Miss. Oshadi Jayathilaka' },
    { col1: 'Rtr. H.M.S Sanjana Artigala', col2: 'Rtr. M.K.Sujani Thuthilochana' },
  ];
  const Voiceteam2 = [
    'Rtr.Ishan Hansaka ','Rtr.Fahmitha Naas','Rtr.Manjina Vishwajith',                                                                   
'Rtr. Sanali Wimalarathne',            
'Rtr. Chandler Vonhaght',                                                                              
'Rtr. Nethmi Suhansa',                                                                 
'Rtr. Sayuni Sooriyaarachchi',
'Rtr. Dinusha Sewwandi', 
'Rtr. Janani Vimarsha',
'Rtr. Chamodya Madhushani',
'Rtr. Ashen Shaminda',
'Rtr. Shiny Romina',                                                   
'Rtr. Charith Yohan',
'Rtr. Sandini Nethma',
'Rtr. Shanika Dilrukshi',
'Rtr. Thishani Nawoda',
'Rtr. Nisal Dilmith',
'Rtr. Yomashi Sanjula',                                                          
'Rtr. Sandali Mihinsa',
'Rtr. Dinuri Divyanjali',
'Rtr. Nadeera Sewmini',
'Rtr. Navaneethan Balachandran',                                                                   
'Rtr. Harikishna Navaratnam',
'Rtr. Lajahary Ramathas',
'Rtr. Praveenkanth Yogarajah',
'Rtr. Vinusha Dalas',
'Rtr. Fahmitha Naas',
'Rtr. Sheron Rackesh',
'Rtr. Vimukthi Bandara',                     
'Rtr. Rashmila Deshani',
'Rtr. Amali Perera',
'Rtr. Tharin Sandhul',
'Rtr. Bhagya Senapathi',
'Rtr. Gayani Madhubhashini',
'Rtr. Omesha Yomali',
'Rtr. Punsarani Fernando',
'Rtr. Amadi Dewmini', 
'Rtr. Malithi Upeksha',                                              
'Rtr. Gayuni Gihansa',
'Rtr. Salani Pabasari',
'Rtr. Madushani Nimeshika',
'Rtr. Hasandee Batheegama',
'Rtr. Kassie Mendis',                                                                                                          
'Rtr. Senudi Laknavee',
'Rtr. Kavindi Weerakkody',
'Rtr. Hashini Navoda',
'Rtr. Lasitha Harshana',                                                      
'Rtr. Themiya Dilshan',
'Rtr. Sachith Sandeepa',
'Rtr. Senura Anuhas',
'Rtr. Hirushan Ruchintha', 
'Rtr. Uthsara Manul', 
'Rtr. Achintha Prageeth', 
'Rtr. Sanjhana Jeyawaran',
'Rtr. Sanudi Perera',
'Rtr. Pipuni Pramoda',
'Rtr. Shevon Pravintha',
'Rtr. Ashen Perera',
'Rtr. Shenal Kumarawadu',
'Rtr. Indrachapa Jayasuriya',
'Rtr. Avishka Vishmitha',
'Rtr. Piumi Jayodya',
'Rtr. Ruwandie Dharmapala',
'Rtr. Malinka Kithmini',
'Rtr. Nikini Tharindya', 
'Rtr. Tharuka Nagasinghe',
'Rtr. Bhashini Kumudika', 
'Rtr. Savindu Sashenka', 
'Rtr.  Kaveesha Kavindi', 
'Rtr. Chamathka Ravindi', 
'Rtr. Shanika Dilrukshi', 
'Rtr. Jayani Indunika', 
'Rtr. Bavindu Gunasinghe',
'Rtr. Yuneesha Ediriweera',
'Rtr. Sandani Fernando',
'Rtr. Sandeepani Thilakarathna',
'Rtr. Sithumini Peshala',
'Rtr. Visakya Masinghe',
'Rtr. Nilakna Disiwari', 
'Rtr. Dilum Wijewardana',
'Rtr. Piumini Navodya',
'Rtr. Chenali Harindi',
'Rtr. Pipuni Nawodya',
'Rtr. Deshitha Gallage',
'Rtr. JDewmi Kavishka',
'Rtr. Shalani Adeesha',
'Rtr. Iruli Godawaththa',
'Rtr. Hesandi Rajapakse',
'Rtr. Sethumya De Silva',
'Rtr. Ishini Yasodha',
'Rtr. Maduni Fernando',
'Rtr. Miyuranga Rajakaruna',
'Rtr. Sudaraka Nilupul',
'Rtr. Nipuni Bhagya',
'Rtr. Piyumi Bhagya',
'Rtr. Sachindu Nimsara',
'Rtr. Mihan Thilakaratne',
'Rtr. Yashara Perera',
'Rtr. Liyen Gunawardana',
'Rtr. Chathumini Perera',
'Rtr. Nuskiya Faiz',
'Rtr. Guwanya Mahanama',
'Rtr. Reehul Arsha',
'Rtr. Imandee Gunarathne',
'Rtr. Ridmi',
'Rtr. Pahan Perera',
'Rtr. Venumi Cooray',
'Rtr. Dhanushika',
'Rtr. Dilakshi',
'Rtr. Manosha',
'Rtr. Paventhiran', 
'Rtr. Sapeena',
'Rtr. Warren',
'Rtr. Vithya',
'Rtr. Kokulakavi Ganesh',
'Rtr. Babysayini Antonvimalaraja',
'Rtr. Januja',
'Rtr. Vijayakumar Januha',
'Rtr. Paramesvaran Mayuraka',
'Rtr. Thusitha Herath',
 
  ];
  const designers = [
    'Rtr. Ranul Navojith',
    'Rtr. Rukshan Senanayaka',
    'Rtr. Bhanuka Uyanage',
    'Rtr. Naveen Hedalla Arachchi',
  ];
  const planingTeam = [
    {POC:['Rtr. Yasiru Athugaldura']},
    {VPOCSA:['Rtr. Nisala Yapa']},
    {CODS:['Rtr. Thejan Dulara','Rtr. Nawoda Thathsarani','Rtr. Renuja Muthugala',]},
    {COPMHA:['Rtr.Ravindu Thamodya','Rtr.Adithya Hewage','Rtr.Chamudi Vihanga Liyanage ']}
  ]
  const devTeam = [
    {SDDC:['Rtr.Krishantha Kumara']},
    {CDIA:['Rtr.Krishantha Kumara']},
    {AID:['Rtr.Shehan Lokuwella']},
    {DEV:['Rtr.Sakindu Ransindu Perera','Rtr.Kavishka Nimsara','Rtr.Yasiru Ramosh','Rtr.Asiri Gayashan']}
  ]

  return (
    <div className="bg-pink-100">
      <h1 className="text-center text-2xl sm:text-4xl pt-10 pb-6">OUR TEAM</h1>
      <div className="flex justify-center items-center">
        <div className="w-4/5 shadow-lg bg-white p-10 rounded-lg overflow-x-auto">
          <div className="mb-20">
            <h2 className="text-xl sm:text-3xl text-center sm:text-left underline mb-6">Creators and Designers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {designers.map((member, index) => (
                <div key={index} >
                  <li>{member}</li>
                </div>
              ))}
            </div>
          </div>



          <div>
            <h2 className="text-xl sm:text-3xl text-center sm:text-left underline mb-6">Recording Team</h2>

            <details className="mb-5">
              <summary className="text-xl sm:text-2xl">2019/2020</summary>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-1">
                {Voiceteam1.map((member, index) => (
                  <React.Fragment key={index}>
                    <div >
                      <li>{member.col1}</li>
                    </div>
                    <div >
                      <li>{member.col2}</li>
                    </div>
    
                  </React.Fragment>
                ))}
              </div>
            </details>
            <details className="mb-20">
              <summary className="text-xl sm:text-2xl">2023/2024</summary>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-1">
                {Voiceteam2.map((member, index) => (
                  <React.Fragment key={index}>
                    <div >
                      <li>{member}</li>
                    </div>

                  </React.Fragment>
                ))}
              </div>
            </details>

          </div>

          <div>
  <h2 className="text-xl sm:text-3xl text-center sm:text-left underline mb-6">2023-2024 Team</h2>

  <h3 className="text-lg sm:text-2x text-primary">President of the Club</h3>
  <div className="grid grid-cols-1  sm:grid-cols-3 gap-4 mt-1">
    {planingTeam.map((member, index) => (
      member.POC && (
        <div key={index} >
          <li>{member.POC}</li>
        </div>
      )
    ))}
  </div>

  <h3 className="text-lg sm:text-2x text-primary mt-6">Vice President of Community Service Avenue</h3>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-1">
    {planingTeam.map((member, index) => (
      member.VPOCSA && (
        <div key={index} >
          <li>{member.VPOCSA}</li>
        </div>
      )
    ))}
  </div>

  <h3 className="text-lg sm:text-2x text-primary mt-6">Co-Directors of Community Service Avenue</h3>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-1">
    {planingTeam.map((member, index) => (
      member.CODS && member.CODS.map((cod, codIndex) => (
        <div key={`${index}-${codIndex}`} >
          <li>{cod}</li>
        </div>
      ))
    ))}
  </div>

  <h3 className="text-lg sm:text-2x text-primary mt-6">Co-chairs of Project Manusath Handa</h3>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-1">
    {planingTeam.map((member, index) => (
      member.COPMHA && member.COPMHA.map((copmha, copmhaIndex) => (
        <div key={`${index}-${copmhaIndex}`} >
          <li>{copmha}</li>
        </div>
      ))
    ))}
  </div>
  <h3 className="text-lg sm:text-2x text-primary mt-6">Senior Director of Digital Communication</h3>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-1">
    {devTeam.map((member, index) => (
      member.SDDC && member.SDDC.map((value, valueIndex) => (
        <div key={`${index}-${valueIndex}`} >
          <li>{value}</li>
        </div>
      ))
    ))}
  </div>
  <h3 className="text-lg sm:text-2x text-primary mt-6">Co-director of IT avenue </h3>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-1">
    {devTeam.map((member, index) => (
      member.CDIA && member.CDIA.map((value, valueIndex) => (
        <div key={`${index}-${valueIndex}`} >
          <li>{value}</li>
        </div>
      ))
    ))}
  </div>
  <h3 className="text-lg sm:text-2x text-primary mt-6">Assistant IT director</h3>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-1">
    {devTeam.map((member, index) => (
      member.AID && member.AID.map((value, valueIndex) => (
        <div key={`${index}-${valueIndex}`} >
          <li>{value}</li>
        </div>
      ))
    ))}
  </div>
  <h3 className="text-lg sm:text-2x text-primary mt-6">Developers</h3>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-1">
    {devTeam.map((member, index) => (
      member.DEV && member.DEV.map((value, valueIndex) => (
        <div key={`${index}-${valueIndex}`} className="py-0">
          <li>{value}</li>
        </div>
      ))
    ))}
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default TeamPage;
