
import "../styles/global.css"
import data from "../data.json"
import "./app.css"
import Title from "../components/Title"
import Body from "../components/Body"

export default function App() {
  return (
    <div className="container w-max h-max">
        <Title title={data.title} subtitle={data.subtitle} />
        <Body body={data.body} author={data.author} reviews={data.reviews} reviews_count={data.reviews_count} learner_complete={data.learner_complete}/>
        
    </div>
    
  
  )
}
