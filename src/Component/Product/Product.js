import React from 'react'
import './Product.css';
import Duct from '../imago/product.png';
import Duct1 from '../imago/product1.png'
import Duct2 from '../imago/product2.png'
import Duct3 from '../imago/product3.png'

function Product() {
  return (
    <div>
        <div className='carte-h'>
            <h1>RELATED PRODUCTS</h1>
        </div>
        <div className='duct-flex'>
            <div>
                <img src={Duct} alt=''/>
                <p id="carte-p">Carte postal briefs</p>
                <p id="p-1">$ 24</p>
            </div>

            <div>
                <img src={Duct1} alt=''/>
                <p id="carte-p">Carte postal briefs</p>
                <p id="p-1">$ 24</p>
            </div>

            <div>
                <img src={Duct2} alt=''/>
                <p id="carte-p">Carte postal briefs</p>
                <p id="p-1">$ 24</p>
            </div>

            <div>
                <img src={Duct3} alt=''/>
                <p id="carte-p">Carte postal briefs</p>
                <p id="p-1">$ 24</p>
            </div>
        </div>
    </div>
  )
}

export default Product