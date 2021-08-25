import React from "react"


export default function Card({details,handleSubscribe}){
    return(
        <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{details.packageName}</h5>
            <h6 class="card-price text-center">{details.currency}{details.price}<span class="period">/{details.period}</span></h6>
            <hr></hr>
            <ul class="fa-ul">
                {
                     details.features.map((scheme)=>{
                        return <li class={scheme.isEnabled ? "":"text-muted"}>
                        <span class="fa-li"><i class={`fas ${scheme.isEnabled ? "fa-check":"fa-times"}`}></i></span>{scheme.isBold ? <strong>{scheme.name}</strong> : `${scheme.name}`}</li>
                    })
                }
               
              {/* <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.details.features.name.isEnabled}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.details.features.name.isEnabled}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.details.features.name.isEnabled}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.details.features.name.isEnabled}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.details.features.name.isEnabled}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.details.features.name.isEnabled}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.details.features.name.isEnabled}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.details.features.name.isEnabled}</li> */}
              
            </ul>
            <div class="d-grid">
               {/* <button href="#" class="btn btn-primary text-uppercase" onClick={ () =>{props.handleSubscribe()} }>Button</button>                 handleSubscribe () is called by on onclick from app.js to card.js */}
               <button href="#" class="btn btn-primary text-uppercase" onClick={()=> handleSubscribe(details.packageName) }>{details.button}</button>
            </div>
          </div>
        </div>
      </div>
    )
}