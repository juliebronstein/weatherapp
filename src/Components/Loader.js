import { motion } from "framer-motion";
import cloudLoader from "../icons/loading.png";
import starter from "../icons/cloud.png";
const Loader = ({type}) => {
    const img=type==="starter"?starter:cloudLoader
    let timeD=`${type==="starter"?1:0.5}`
    const imgAnimate = {
        animate: {
            x:[10,-10],
            transition: {
                yoyo:Infinity,
                duration:timeD
            }
        }
    }

    return ( 
        <div className="loading d-flex flex-column g-3 justify-content-center align-items-center">
            <motion.img className='mt-1 col-3'
            src={img}
            alt=""
            variants={imgAnimate}
            animate='animate'
            ></motion.img>
           {type==="loading"&& <div  className="loading fs-5 fw-bold title">
            Loading...
            </div>}
        </div>
    );
}
export default Loader;