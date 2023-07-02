import React from 'react'

const Admin = () => {
    const mentees = [
        {
          "_id": {
            "$oid": "01223"
          },
          name: "Tushar",
          email: "tushar@gmail.com",
          phone: "1234567890",
          language: "Kannad",
          dob: {
            "$date": {
              "$numberLong": "2023-06-11"
            }
          },
          avail: {
            "$date": {
              "$numberLong": "2023-07-09"
            }
          },
          education_status: "puc",
          "school_address": "Something",
          "support_area": "New York",
          "__v": {
            "$numberInt": "0"
          }
        },
        {
            "_id": {
              "$oid": "23343"
            },
            name: "Nisarga",
            email: "nisarga@gmail.com",
            phone: "1234567890",
            language: "English",
            dob: {
              "$date": {
                "$numberLong": "2023-06-11"
              }
            },
            avail: {
              "$date": {
                "$numberLong": "2023-07-1"
              }
            },
            education_status: "puc",
            "school_address": "something",
            "residence_address": "something again",
            "support_area": "Social",
            "__v": {
              "$numberInt": "0"
            }
          }
          ,
        {
            "_id": {
              "$oid": "65433"
            },
            name: "Rhytham",
            email: "rhythm@gmail.com",
            phone: "1234567890",
            language: "English",
            dob: {
              "$date": {
                "$numberLong": "2023-06-11"
              }
            },
            avail: {
              "$date": {
                "$numberLong": "2023-07-22"
              }
            },
            education_status: "puc",
            "school_address": "something",
            "residence_address": "something again",
            "support_area": "Finance",
            "__v": {
              "$numberInt": "0"
            }
          }
          ,
        {
            "_id": {
              "$oid": "3355"
            },
            name: "Riya Gandhi",
            email: "riya@gmail.com",
            phone: "1234567890",
            language: "Hindi",
            dob: {
              "$date": {
                "$numberLong": "2023-06-11"
              }
            },
            avail: {
              "$date": {
                "$numberLong": "2023-07-03"
              }
            },
            education_status: "puc",
            "school_address": "something",
            "residence_address": "something again",
            "support_area": "Finanace",
            "__v": {
              "$numberInt": "0"
            }
          }
          ,
        {
            "_id": {
              "$oid": "64a03f5510ce836f6142d33c"
            },
            name: "rhythamr",
            email: "tushr@gmail.com",
            phone: "1234567890",
            language: "Kannad",
            dob: {
              "$date": {
                "$numberLong": "2023-06-11"
              }
            },
            avail: {
              "$date": {
                "$numberLong": "2023-07-19"
              }
            },
            education_status: "puc",
            "school_address": "something",
            "residence_address": "something again",
            "support_area": "Tech",
            "__v": {
              "$numberInt": "0"
            }
          }
          ,
        {
            "_id": {
              "$oid": "64a03f5510ce836f6142d33c"
            },
            name: "Mohini",
            email: "mohini@gmail.com",
            phone: "1234567890",
            language: "Hindi",
            dob: {
              "$date": {
                "$numberLong": "1664390400000"
              }
            },
            avail: {
              "$date": {
                "$numberLong": "2023-07-13"
              }
            },
            education_status: "puc",
            "school_address": "something",
            "residence_address": "something again",
            "support_area": "Tech",
            "__v": {
              "$numberInt": "0"
            }
          }
      ];
      
      const mentors = [
        {
          "_id": {
            "$oid": "64a03fd68b5391d63521aa39"
          },
          name: "NisargaV",
          email: "nisargav@gmail.com",
          phone: "1234565664",
          dob: {
            "$date": {
              "$numberLong": "1022976000000"
            }
          },
          avail: {
            "$date": {
              "$numberLong": "2023-06-22"
            }
          },
          "educational_background": "  ",
          "designation": "BCA",
          "languages": "English",
          "support_area": "Finance",
          "hours": {
            "$numberInt": "2"
          },
          "__v": {
            "$numberInt": "0"
          }
        },
        {
            "_id": {
              "$oid": "64a03fd68b5391d63521aa39"
            },
            name: "NisgaarV",
            email: "nisargav@gmail.com",
            phone: "1234565664",
            dob: {
              "$date": {
                "$numberLong": "1022976000000"
              }
            },
            avail: {
              "$date": {
                "$numberLong": "2023-07-01"
              }
            },
            "educational_background": "  ",
            "designation": "BCA",
            "languages": "English",
            "support_area": "Social",
            "hours": {
              "$numberInt": "2"
            },
            "__v": {
              "$numberInt": "0"
            }
          },
          {
            "_id": {
              "$oid": "64a03fd68b5391d63521aa39"
            },
            name: "NiasargV",
            email: "nisargav@gmail.com",
            phone: "1234565664",
            dob: {
              "$date": {
                "$numberLong": "1022976000000"
              }
            },
            avail: {
              "$date": {
                "$numberLong": "2023-07-03"
              }
            },
            "educational_background": "  ",
            "designation": "BCA",
            "languages": "Hindi",
            "support_area": "Finance",
            "hours": {
              "$numberInt": "2"
            },
            "__v": {
              "$numberInt": "0"
            }
          },
          {
            "_id": {
              "$oid": "64a03fd68b5391d63521aa39"
            },
            name: "KisargaV",
            email: "nisargav@gmail.com",
            phone: "1234565664",
            dob: {
              "$date": {
                "$numberLong": "1022976000000"
              }
            },
            avail: {
              "$date": {
                "$numberLong": "2023-07-09"
              }
            },
            "educational_background": "  ",
            "designation": "BCA",
            "languages": "Social",
            "support_area": "Kannad",
            "hours": {
              "$numberInt": "2"
            },
            "__v": {
              "$numberInt": "0"
            }
          },{
            "_id": {
              "$oid": "64a03fd68b5391d63521aa39"
            },
            name: "NisargaV",
            email: "nisargav@gmail.com",
            phone: "1234565664",
            dob: {
              "$date": {
                "$numberLong": "1022976000000"
              }
            },
            avail: {
              "$date": {
                "$numberLong": "2023-07-15"
              }
            },
            "educational_background": "  ",
            "designation": "BCA",
            "languages": "English",
            "support_area": "Tech",
            "hours": {
              "$numberInt": "2"
            },
            "__v": {
              "$numberInt": "0"
            }
          },{
            "_id": {
              "$oid": "64a03fd68b5391d63521aa39"
            },
            name: "NisargaV",
            email: "nisargav@gmail.com",
            phone: "1234565664",
            dob: {
              "$date": {
                "$numberLong": "1022976000000"
              }
            },
            avail: {
              "$date": {
                "$numberLong": "2023-07-19"
              }
            },
            "educational_background": "  ",
            "designation": "BCA",
            "languages": "Kannad",
            "support_area": "Tech",
            "hours": {
              "$numberInt": "2"
            },
            "__v": {
              "$numberInt": "0"
            }
          },
      ];
      
      
      // Sort the mentor and mentee data based on the name criterion
      mentors.sort((a, b) => a.name.localeCompare(b.name));
      mentees.sort((a, b) => a.name.localeCompare(b.name));
      
      // Create an empty array to store the matched mentor and mentee pairs
      const matchedPairs = [];
      
      // Iterate through each mentee
      for (const mentee of mentees) 
      {
        // Find mentors that match the desired language of the mentee
        const matchedMentors = mentors.filter(
          mentor => mentor.languages === mentee.language
        );
      
        let matchedMentor = null;
      
        // Check if any of the matched mentors have the same availability date as the mentee
        
        for (const mentor of matchedMentors) {
        let i;
          const mentorAvailDate = new Date(mentor.avail.$date.$numberLong);
          const menteeAvailDate = new Date(mentee.avail.$date.$numberLong);
      
          if (mentorAvailDate.getDate() === menteeAvailDate.getDate()) {
            // Check if the mentor's support_area matches the mentee's support_area
            if (mentor.support_area === mentee.support_area) {
              matchedMentor = mentor;
              if (matchedMentor) {
                matchedPairs.push({
                  menteeName: mentee.name,
                  mentorName: matchedMentor.name
                });
              }
            }
          }
          else if(i===mentors.length){
            console.log("We will get back to you");
          }
          else{
            break;
          }
    
    
        }
      
        // If no mentor with matching availability is found, select the mentor with the same language
         if (!matchedMentor) {
           matchedMentor = matchedMentors[0];
        //   // If a mentor is found, add the mentor and mentee names to the matched pairs
        //   if (matchedMentor) {
        //     matchedPairs.push({
        //       menteeName: mentee.name,
        //       mentorName: matchedMentor.name
        //     });
        //   }
        }
      
       
        
      }
      
      // Print the matched mentor and mentee names
      if (matchedPairs.length > 0) 
      {
        for (const pair of matchedPairs) 
        {
          console.log(`Mentee: ${pair.menteeName}, Mentor: ${pair.mentorName}`);
        }
      } 
      else 
      {
        console.log("We will get back to you");
      }
    return (
        <>
      <h1>Mentor Assignment</h1>
    <table class="table my-5">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Mentor</th>
      <th scope="col">Mentee</th>
      <th scope="col">Common Constraint</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tushar</td>
      <td>Nisarga</td>
      <td>Kannada</td>
    </tr>
    </tbody>
            </table>
            </>
  )
}

export default Admin