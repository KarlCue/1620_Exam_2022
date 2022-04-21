// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

// Your code goes here

//Load Contacts

const allContactsList = document.querySelector('#display_all_contacts')
function displayAllContact(){
  for (const contact of contactsList){
    console.log(contact)
    const contactTemplate = `<div class=contactListCSS><img src="img/${contact.image}">${contact.name}</div>`
    allContactsList.insertAdjacentHTML("afterbegin",contactTemplate)
  }
}

displayAllContact()

//Display Single Contact

const displaySingleContact = document.querySelector('#display_single_contact')

function displayContact(event){
  console.log(event)
  if (event.target.localName === 'div'){
    names = event.target.innerText
  }

  for (const contactInfo of contactsList ){
    if (contactInfo.name === names)
      phone = contactInfo.phone
      email = contactInfo.email
      name2 = contactInfo.name
      image = contactInfo.image
  }
      displayContactTemplate = ` 
        <div id="options">
            <button class="deleteContactBtn">x</button>
        <div class="displayContact">
            <h1><img src="img/${image}">${name2}</h1>
            <p>${email}</p>
            <p>${phone}</p>
        </div>  `;

      displaySingleContact.insertAdjacentHTML("afterbegin", displayContactTemplate);
//Delete Contact
      const deleteContact = document.querySelector(".deleteContactBtn")
      function deleteReadText() {
        while (displaySingleContact.hasChildNodes()) {
          displaySingleContact.removeChild(displaySingleContact.firstChild)
        }
      }
      deleteContact.addEventListener("click", deleteReadText)
}
displaySingleContact.addEventListener('click', displayContact)

