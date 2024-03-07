import React from 'react'

const TeamPage = () => {
  const team = [
    { col1: 'Rtr. U.R.B.M.Ariyadasa', col2: 'Rtr. R.M.O.Gangangana' },
    { col1: 'Rtr. Liyanage Tharindu Nirmal Wickremasinghe', col2: 'Rtr. Tharani Karunathilake' },
    { col1: 'Rtr. Ekanayakage Gayani Nishadika', col2: 'Rtr. Lakshitha Lahiru Perera' },
    { col1: 'Rtr. J.H Eranga Malindi', col2: 'Rtr. Chandika Maduvantha' },
    { col1: 'Rtr. Tharushika Liyanapathirana', col2: 'Rtr. Gayathrika Gaweshini' },
    { col1: 'Rtr. Ridmi Sameera Thilakarathna', col2: 'Rtr. Arudselvam Uthayamalini' },
    { col1: 'Rtr. Sanduni Wathsala Karunarathna', col2: 'Rtr. Karthiga Sivapiragasam' },
    { col1: 'Rtr. Gimsara Kulathunga Rathnayaka Pathirana', col2: 'Rtr. Dakshana Vijayanathan' },
    { col1: 'Rtr. D.R.D.Dinukshi', col2: 'Rtr. Luxshika Uthayakumar' },
    { col1: 'Rtr. Athauda Achchillage Ransi Salika', col2: 'Rtr. B.L.L.U. Liyanage' },
    { col1: 'Rtr. Samarakoon Singappuli Arachchige Malindu Gimhan', col2: 'Rtr. Sajani Senadheera' },
    { col1: 'Rtr. A.A.D.C.D Amarasinghe', col2: 'Rtr. Jayodha Dissanayaka' },
    { col1: 'Rtr. Sahan Sulochana Hettiarachchi', col2: 'Rtr. Madhushika Munasinghe' },
    { col1: 'Rtr. H.M.H.T.Munasinghe', col2: 'Rtr. Ravindu Hiroshan' },
    { col1: 'Rtr. D.M.Pravindhya Harshani Pussepitiya', col2: 'Rtr. Nirasha Wimalasooriya' },
    { col1: 'Rtr. Prarthana Gamage', col2: 'Rtr. Isuri illeperuma' },
    { col1: 'Rtr. Pamal Rojitha Nanayakkara', col2: 'Rtr. Pasan de silva' },
    { col1: 'Rtr. L.R. Vishmini Navoda Rathnakumara', col2: 'Rtr. Dilshan Pramudith Bandara' },
    { col1: 'Rtr. Hewa Paththinige Nimesh Buwenaka Ariyarathne', col2: 'Rtr. Samanthika Rajapaksha' },
    { col1: 'Rtr. U.A.balasooriya', col2: 'Rtr. Dulmi Kathriachchi' },
    { col1: 'Rtr. Dinithi Navodya', col2: 'Rtr. Dulinda Perera' },
    { col1: 'Rtr. P.M. Nuwan Sriyantha Bandara', col2: 'Rtr. Chathumi Thumbovila' },
    { col1: 'Rtr. W.W.M.N.T.Wickramasingha', col2: 'Rtr. Ayesh Malindu' },
    { col1: 'Rtr. Olupothage Shayinie Ivani de Silva', col2: 'Rtr. Duneesha Ariyawansa' },
    { col1: 'Rtr. Nushan Vitharana', col2: 'Rtr. Sandali Liyanagoonawardena' },
    { col1: 'Rtr. Aseka warnakulasooriya', col2: 'Rtr. D.M.P.S. Dissanayake' },
    { col1: 'Rtr. A.U.P.H.Athukorala', col2: 'Rtr. L.D.H.Gimhani' },
    { col1: 'Rtr. Dushan Dissanayake', col2: 'Rtr. B.R.W.M.D.Thoradeniya' },
    { col1: 'Rtr. Dakshina Ranmal', col2: 'Rtr. P.G.M.S.Gunarathne' },
    { col1: 'Rtr. Himali wijekoon', col2: 'Rtr. R.A.D.J.N.Ranasinghe' },
    { col1: 'Rtr. Anuradhi De Silva', col2: 'Rtr. J.M.P.M.Jayawardane' },
    { col1: 'Rtr. Neha Ambegoda', col2: 'Rtr. P.M.P.B.Uyangoda' },
    { col1: 'Rtr. T.M.Piyumi nisansala thennakoon', col2: 'Rtr. S.M.U.I.Senadhipathi' },
    { col1: 'Rtr. Kasuni Ranushika Ranatunga Gomes', col2: 'Rtr. Tharindu Samarakoon' },
    { col1: 'Rtr. K.L.D. Dulshi Tharuka Liyanage', col2: 'Rtr. Nimana Perera' },
    { col1: 'Rtr. Ramodya Lakrandi', col2: 'Miss. Chamali Dewmini Thanthiriwattha' },
    { col1: 'Rtr. Dasun Madhawa Premathilaka', col2: 'Rtr. Chamika Erandi Wickramarathne' },
    { col1: 'Rtr. S.Bimsara Malith Somarathna', col2: 'Miss. Oshadi Jayathilaka' },
    { col1: 'Rtr. H.M.S Sanjana Artigala', col2: 'Rtr. M.K.Sujani Thuthilochana' }
];

const designers = [
  'Rtr. Ranul Navojith',
  'Rtr. Rukshan Senanayaka',
  'Rtr. Bhanuka Uyanage',
  'Rtr. Naveen Hedalla Arachchi'
];

  return (
    <div className="bg-pink-100">
  <h1 className="text-center text-2xl sm:text-4xl  pt-10 pb-6">OUR TEAM</h1>
  <div className="flex justify-center items-center">
    <div className="w-4/5 shadow-lg bg-white p-10 rounded-lg overflow-x-auto">
      <table className="text-left w-full md:table">
        <thead>
          <tr>
            <td colSpan={2} className="py-10 px-6 text-xl text-center sm:text-left sm:text-3xl underline">Designers</td>
          </tr>
        </thead>
        <tbody>
          {designers.map((member, index) => (
            <tr key={index} className="md:table-row">
              <td className="py-3 block md:table-cell"><li>{member}</li></td>
            </tr>
          ))}
        </tbody>
        <thead>
          <tr>
            <td colSpan={2} className="pt-20 px-6 text-xl sm:text-3xl text-center sm:text-left underline">Recording Team</td>
          </tr>
          <tr>
            <td colSpan={2} className="pt-10 px-6 text-xl sm:text-2xl">2019/2020</td>
          </tr>
        </thead>
        <tbody>
          {team.map((member, index) => (
            <tr key={index} className="md:table-row">
              <td className="py-3 block md:table-cell"><li>{member.col1}</li></td>
              <td className="py-3 block md:table-cell"><li>{member.col2}</li></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
  )
}

export default TeamPage