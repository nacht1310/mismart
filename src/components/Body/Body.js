import { useState } from "react";
import "./Body.css";
import { Table } from "./Table/Table";

function Body({data, setProject, setStation}) {
    const [projectIndex, setProjectIndex] = useState(0);
    let current = projectIndex
    console.log(current)
    const setActive = (index) => {
        setProjectIndex(index-1)
    }

    let station = data[projectIndex].data.stations ?? []
    
    return(
        <>
            <div className="body">
                <div className="projects">
                    <div className="project-details-container">
                        {
                            data.map(data => {
                                return(
                                    <div className={projectIndex + 1 === data.index ? "project-details active" : "project-details"}
                                    onClick={() => setActive(data.index)}>
                                        <p className="project-name">{data.data.project_name}</p>
                                        <p>Loại Ăng ten</p>
                                        <p>{data.data.project_antenna_type}</p>
                                        <p>Số trạm</p>
                                        <p>{data.data.stations ? data.data.stations.length : 0}</p>
                                        <p>Người tạo</p>
                                        <p>{data.data.project_creator}</p>
                                        <p>Ngày tạo</p>
                                        <p>{data.data.project_date}</p>
                                    </div>
                                )
                            })
                        }
    
                    </div>

                    <button className="project-button" onClick={() => setProject()}>Tạo dự án</button>
                </div>

                <div className="stations">
                    <button className="station-button" id={current} onClick={() => setStation(current)}>Thêm trạm</button>
                    <Table data={station} className="station_table active"/>
                </div>

            </div>
        </>
        
    );

}

export default Body