import Toplist from "../components/lists/Toplist";




const Recent = () => {
    return(
        <>
        <Toplist title="Recent Songs" type="Song" recent="true" onClick1={() => alert("WIP!")} onClick2={() => alert("WIP!")} onClick3={() => alert("WIP!")}/>
        </>
    )
}

export default Recent;