import MasonryImageList from "./MasonryImageList";

function Hi(){
    return(
        <div style={{height: 600, textAlign: 'center'}}>
            <div style={{
                margin: 10, 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center",
                }}>
                <h1>Hi, I’m Temirlan Turabay, I build front-end for the web.</h1>
                <p>I’m  aspiring software developer and this is my portfolio.</p>
                <MasonryImageList/>
            </div>
        </div>
    );
}

export default Hi;