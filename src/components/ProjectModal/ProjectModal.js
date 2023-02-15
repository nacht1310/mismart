import './ProjectModal.css'
import { useForm } from 'react-hook-form'

function ProjectModal({dataState, setState, addProject}) {
    const cities = [
        {city: 'Vũng Tàu',
         abbreviation: 'VT'}, 
        {city:'Hà Nội',
         abbreviation:'HN'},
        {city:'TP.HCM',
         abbreviation:'HCM'},
        {city: 'Bình Dương',
         abbreviation:'BD'},
        {city:'Long An',
         abbreviation:'LA'}]

    const {register, handleSubmit} = useForm()

    function onHandleSubmit(data) {
        const date = new Date()
        const formatData = {
            "project_name":data.name,
            "project_antenna_type":'Telecom',
            "project_creator":'MiSmart',
            "project_date": date.toUTCString(),
            "project_city": data.city,
            "stations": []
        }
        data !== {} ? addProject([...dataState, {
            "index":dataState.length +1,
            "data":formatData
          }]) : addProject([...dataState])

        setState(false)
    }
    
  return (
    <form className='project-modal-container' onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="project-modal">
            <h2>TẠO DỰ ÁN</h2>
            <div >
                <label>Tên dự án</label>
                <input type='text' {...register('name')} id='name'/>
                <label>Tỉnh</label>
                <select {...register('city')}>
                    {
                        cities.map((city) => {
                            return(
                                <option value={city.abbreviation}>
                                    {city.city}
                                </option>
                            )
                        })
                    }
                </select>
                <label>Mô tả (Tùy chọn)</label>
                <textarea {...register('project-des')} id='project-des' rows='5'></textarea>
            </div>
        </div>
        <div className='button-container'>
            <button className='cancel' onClick={() => setState(false)}>Hủy</button>
            <button type='submit' className='create'>Tạo</button>
        </div>
    </form>
  )
}

export default ProjectModal