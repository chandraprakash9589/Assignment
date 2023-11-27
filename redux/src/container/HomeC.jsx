import Home from "../components/Home";
import { connect } from "react-redux";
import addTocart from '../services/Actions/action';

const mapstateToprops = dispatch =>({

})
const mapDispatchToProps = (dipatch)=>({
  addTocartHandle : data=>dispatchEvent(addTocart(data))
})
export default connect(mapstateToprops,mapDispatchToProps)(Home)