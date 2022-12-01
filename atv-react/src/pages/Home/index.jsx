import{Banner} from '../../components/Banner';
import {Cards} from '../../components/Cards';
import {Cupons} from '../../components/Cupons';
import {E_commerce} from '../../components/E_commerce';
export function HomePage() {
    return(
        <div id="home-page">
            <div className="container">
                <Banner/> 
                <Cards/>
                <Cupons/>
                <E_commerce/>
                
            </div>
        </div>
    )
}