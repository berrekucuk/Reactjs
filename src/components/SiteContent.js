import Content from "./Content"
import Categories from "./Categories"

function SiteContent(){
    return <>
        <h1>Site Content</h1>
        <div style={{display:'flex'}}>
            <Categories/>
            <Content/>
        </div>
        
        
    </> 
}

export default SiteContent