import logo from './logo.svg';
import './App.css';

import Card from './Card';

function App() {
  let details=[{
    packageName:"FREE",
    price:0,
    currency:"$",
    period:"monthly",
    button:"FREE",
    features:[
      {
        name:"Single User",
        isEnabled:true
      },
      {
        name:"5GB storage",
        isEnabled:true
      },
      {
        name:"Unlimited Public Projects",
        isEnabled:true
      },
      {
        name:"Community Access",
        isEnabled:true
      },
      {
        name:"Unlimited Private Projects",
        isEnabled:false
      },
      {
        name:"Dedicated Phone Support",
        isEnabled:false
      },
      {
        name:"Free Subdomain",
        isEnabled:false
      },
      {
        name:"Monthly Status Reports",
        isEnabled:false
      },
   ]
  },
  {
    packageName:"PLUS",
    price:9,
    currency:"$",
    period:"monthly",
    button:"PLUS",
    features:[
      {
        name:"5 User",
        isEnabled:true,
        isBold:true
      },
      {
        name:"50GB storage",
        isEnabled:true
      },
      {
        name:"Unlimited Public Projects",
        isEnabled:true
      },
      {
        name:"Community Access",
        isEnabled:true
      },
      {
        name:"Unlimited Private Projects",
        isEnabled:true
      },
      {
        name:"Dedicated Phone Support",
        isEnabled:true
      },
      {
        name:"Free Subdomain",
        isEnabled:true
      },
      {
        name:"Monthly Status Reports",
        isEnabled:false
      },
   ]
  },
  {
    packageName:"PRO",
    price:49,
    currency:"$",
    period:"monthly",
    button:"PRO",
    features:[
      {
        name:"Unlimited Users",
        isEnabled:true,
        isBold:true
      },
      {
        name:"150GB storage",
        isEnabled:true
      },
      {
        name:"Unlimited Public Projects",
        isEnabled:true
      },
      {
        name:"Community Access",
        isEnabled:true
      },
      {
        name:"Unlimited Private Projects",
        isEnabled:true
      },
      {
        name:"Dedicated Phone Support",
        isEnabled:true
      },
      {
        name:"Free Subdomain",
        isEnabled:true
      },
      {
        name:"Monthly Status Reports",
        isEnabled:true
      },
   ]
  }
]

  let onSubscribe = (scheme) =>{
    alert(`Scheme ${scheme} Subscribed`)
  }
  return (
    <section class="pricing py-5">
    <div class="container">
      <div class="row">
        {
           details.map((obj)=>{
            return <Card details={obj} handleSubscribe={onSubscribe}></Card>
          })
        }
      </div>
    </div>
    </section>
    
  );
}

export default App;