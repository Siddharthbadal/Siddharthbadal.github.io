import contacts from "../data/contacts"

export default function Contacts(){
    return (
        <div className="contacts flex flex-row  justify-around mt-2">
            {contacts.map(contact => (

                <p className="text-xl ">  
            <a  href={contact.link} target="_blank" className="bg-yellow-100 px-2 mb-2 rounded-md hover:bg-yellow-300 delay-500" >
            {contact.title}
            </a>
        </p>
        ))}




        {/* <p>Github - <a href="https://github.com/Siddharthbadal/" target="_blank" className="bg-yellow-100 px-2 mb-2 rounded-lg">siddharthbadal</a></p>
        <p>twitter - <a href="https://x.com/siddbadal" target="_blank" className="bg-yellow-100 px-2 mb-2 rounded-lg">@siddbadal</a></p>
        <p>Email - <a href="mailto:sidharth.badal@gmail.com" target="_blank" className="bg-yellow-100 px-2 mb-2 rounded-lg">sidharth.badal@gmail.com</a></p> */}
    </div>
    )
}