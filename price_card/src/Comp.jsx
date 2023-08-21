
import React from 'react'
const color="gray"
export default function card_comp(props) {
  return (
    <div id='box'>
    <div className='crd d-flex align-items-center'>
    <p className="para">{props.rate}</p>
    <h1 className="h1">{props.h1}</h1><span className='mo'>month</span>
    <hr />
 
    <ul>
            <li className={props.a}><span><i className={props.cl1} aria-hidden="true"></i></span><span className={props.cll1}>Singal User</span></li>
            <li className={props.b}><span><i className={props.cl2} aria-hidden="true"></i></span><span className={props.cll2}>50GB Storage</span></li>
            <li className={props.c}><span><i className={props.cl3} aria-hidden="true"></i></span><span className={props.cll3}>Unlimited Public Projects</span></li>
            <li className={props.d}><span><i className={props.cl4} aria-hidden="true"></i></span><span className={props.cll4}>Community Access</span></li>
            <li className={props.e}><span><i className={props.cl5} aria-hidden="true"></i></span><span className={props.cll5}>Unlimited Private Projects</span></li>
            <li className={props.f}><span><i className={props.cl6} aria-hidden="true"></i></span><span className={props.cll6}>Dedicated Phone Support</span></li>
            <li className={props.g}><span><i className={props.cl7} aria-hidden="true"></i></span><span className={props.cll7}>Free Subdomain</span></li>
            <li className={props.h}><span><i className={props.cl8} aria-hidden="true"></i></span><span className={props.cll8}>Monthly Status Reports</span></li>
    </ul>

    <div className='btn'>
          <button type="button" class="btn btn-primary ">Button</button>
    </div>
</div> 
</div>
  )
}
