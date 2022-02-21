import React, {useState} from "react";
import data from "./data";
import "./Search.css";
import PDF from "./img/abnt.pdf";


const Search = () => {
    const [filter, setFilter] = useState("");
    const searchText = (event) =>{
        setFilter(event.target.value);
    }
    let dataSearch = data.cardData.filter(item =>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });
   return(
       <section className="py-4 container">
       <div className="row justify-content-center">

       <div className="col-12 mb-5">
       <div className="mb-3 col-4 mx-auto text-center">
          <label className="form-lable h4">Search</label>
              
               <input 
               type="text"
               className="from-control"
               value={filter}
               onChange={searchText.bind(this)}

           />
       </div>
        </div>

      {dataSearch.map((item, index) => {
            return(
                <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-2 overflow-hidden h-100 shadow">
        <img src={item.img} className="card-img-left" alt="#"/>
         
         
         <div className="card-body col-xs-6">
                   <h5 className="card-title">{item.name}</h5>
                    <p>Name</p>
                   <h5 className="card-text">{item.salary}</h5>
                   <p>Salary range</p>
                   <h5 className="card-text">{item.age}</h5>
                   <p>Age</p>
                   <a className="two" href={PDF} download="abnt" >
                  <button>
                  Download Profile
                   </button>
                   </a>

          </div>
           
      </div>
     </div>    
            )
              })}
      
    </div>
     </section>
   )
}

export default Search
