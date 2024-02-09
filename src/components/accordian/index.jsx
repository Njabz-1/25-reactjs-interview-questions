// single selection
// multiple selection

import data from "./data";

export default function() {

    return <div className="wrapper">
        {
            data && data.length > 0 ? 
            data.map(dataItem => <div className="item">
                <div className="title">
                    <h3>{dataItem.question}</h3>
                    <span>++</span>
                </div>
            </div>) 
            : <div> No data found </div>
        }
        </div>
}