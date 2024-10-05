import './JobItem.css'
export default function JobItem(props){
    return(
        <div className="job-item">
            <div className="logo">
                <img src="https://cms.imgworlds.com/assets/9558de9d-1e49-437e-aa7b-b8bd4d999b00.jpg?key=home-gallery" alt=""></img>
            </div>
            <div className="job-info">
                <h2 className="info-name">{props.name}</h2>
                <h2 className="info-company">{props.company}</h2>
                <div className="wage-location-profession">
                    <span>{props.wage}</span>
                    <span>{props.cities}</span>
                    <span>{props.profession}</span>
                </div>
            </div>
        </div>
    )
}